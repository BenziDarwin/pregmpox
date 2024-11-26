'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, Users, Book, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-background.gif"
          alt="Animated medical background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        <div className="relative z-10 text-center text-foreground">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to PREGMPOX
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Advancing Research in Pregnancy and Mpox
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button asChild size="lg">
              <Link href="/resources">
                Explore Resources <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FocusAreaCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="Publications"
              description="Access our latest research publications and findings."
              link="/resources#publications"
            />
            <FocusAreaCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Partners"
              description="Discover our network of research partners and collaborators."
              link="/partners"
            />
            <FocusAreaCard
              icon={<Book className="h-10 w-10 text-primary" />}
              title="Resources"
              description="Explore our comprehensive database of research resources."
              link="/resources"
            />
            <FocusAreaCard
              icon={<Phone className="h-10 w-10 text-primary" />}
              title="Contact"
              description="Get in touch with our team for inquiries and collaborations."
              link="/contact"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Your contribution can make a significant impact on our research into pregnancy and mpox. 
            Help us advance medical knowledge and improve patient care.
          </p>
          <Button asChild size="lg">
            <Link href="/donate">
              Donate Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function FocusAreaCard({ 
  icon, 
  title, 
  description, 
  link 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl font-semibold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="outline">
          <Link href={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}