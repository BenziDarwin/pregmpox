'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const donationSchema = z.object({
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid amount",
  }),
  customAmount: z.string().optional(),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().optional()
})

type DonationFormData = z.infer<typeof donationSchema>

const predefinedAmounts = ['25', '50', '100', '250']

export function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: '50'
    }
  })

  const selectedAmount = watch('amount')
  const customAmount = watch('customAmount')

  const handleAmountSelection = (value: string) => {
    setValue('amount', value)
    setValue('customAmount', value)
  }

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true)
    try {
      // Here you would typically integrate with your payment processor
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulated API call
      setShowSuccess(true)
      reset()
    } catch (error) {
      console.error('Donation failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {showSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-center py-8"
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your generous donation will help advance our research.
          </p>
          <Button
            onClick={() => setShowSuccess(false)}
            variant="outline"
          >
            Make Another Donation
          </Button>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <Label>Select Amount</Label>
            <RadioGroup
              className="grid grid-cols-4 gap-4"
              defaultValue="50"
              value={selectedAmount}
              onValueChange={handleAmountSelection}
            >
              {predefinedAmounts.map((amount) => (
                <div key={amount}>
                  <RadioGroupItem
                    value={amount}
                    id={`amount-${amount}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`amount-${amount}`}
                    className="flex h-14 items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    ${amount}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div>
              <Label htmlFor="customAmount">Custom Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                <Input
                  id="customAmount"
                  type="number"
                  min="1"
                  step="any"
                  placeholder="Enter amount"
                  className="pl-7"
                  {...register('customAmount')}
                  value={customAmount || selectedAmount}
                  onChange={(e) => {
                    if (e.target.value) {
                      setValue('amount', e.target.value)
                      setValue('customAmount', e.target.value)
                    } else {
                      setValue('amount', '50')
                      setValue('customAmount', '50')
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                {...register('name')}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message (Optional)</Label>
              <Input
                id="message"
                {...register('message')}
                placeholder="Share why you're supporting us"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : `Donate $${customAmount || selectedAmount}`}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}