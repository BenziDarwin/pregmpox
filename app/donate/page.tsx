'use client'

import { motion } from 'framer-motion'
import { DonationForm } from '@/components/donation-form'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Support Our Research</h1>
          <p className="text-lg text-muted-foreground">
            Help us advance critical research in pregnancy and mpox
          </p>
        </motion.div>

        <motion.div 
          className="bg-card rounded-lg shadow-lg p-8 mb-12"
          {...fadeIn}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">Research Impact</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Clinical trials and studies
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Treatment protocol development
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Healthcare provider education
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Global Reach</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  International collaborations
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Resource development
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Knowledge sharing initiatives
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-card rounded-lg shadow-lg p-8"
          {...fadeIn}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Make a Donation</h2>
          <DonationForm />
        </motion.div>
      </div>
    </div>
  )
}