'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const partners = [
  {
    name: 'Global Health Institute',
    logo: '/placeholder.svg?height=100&width=100',
    description: 'Leading research in global health initiatives and infectious diseases.',
    website: 'https://example.com/ghi'
  },
  {
    name: 'BioTech Innovations',
    logo: '/placeholder.svg?height=100&width=100',
    description: 'Pioneering biotechnology solutions for emerging health challenges.',
    website: 'https://example.com/biotech'
  },
  {
    name: 'Medical Research Foundation',
    logo: '/placeholder.svg?height=100&width=100',
    description: 'Funding groundbreaking medical research to improve global health.',
    website: 'https://example.com/mrf'
  },
  {
    name: 'Data Analytics Health',
    logo: '/placeholder.svg?height=100&width=100',
    description: 'Leveraging big data for health insights and predictive analytics.',
    website: 'https://example.com/dah'
  }
]

export default function Partners() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Research Partners
      </motion.h1>
      <motion.p 
        className="text-xl text-center mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        PREGMPOX collaborates with leading institutions and organizations worldwide to advance our research in pregnancy and mpox. Together, we're making significant strides in understanding and combating these critical health issues.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="flex items-center space-x-4">
                  <Image src={partner.logo} alt={`${partner.name} logo`} width={100} height={100} className="rounded-full" />
                  <CardTitle>{partner.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{partner.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={partner.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

