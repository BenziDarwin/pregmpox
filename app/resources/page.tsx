'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FileText, BookOpen, FileCheck, FileCode, FileLock, Search, Menu } from 'lucide-react'
import axios from 'axios'

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('publications')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call an API to search the Drupal CMS
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        PREGMPOX Resources
      </motion.h1>
      <motion.p 
        className="text-xl text-center mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Access a wealth of information and tools to support your research in pregnancy and mpox. Our resources are regularly updated to reflect the latest findings and best practices in the field.
      </motion.p>
      
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="search"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </motion.div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="hidden md:grid w-full md:grid-cols-5 gap-2 p-1">
          <TabsTrigger value="publications" className="w-full">Publications</TabsTrigger>
          <TabsTrigger value="facts" className="w-full">Facts & Figures</TabsTrigger>
          <TabsTrigger value="protocols" className="w-full">Protocols</TabsTrigger>
          <TabsTrigger value="sops" className="w-full">SOPs</TabsTrigger>
          <TabsTrigger value="policies" className="w-full">Policy Documents</TabsTrigger>
        </TabsList>
        
        <div className="md:hidden">
          <select 
            className="w-full p-2 bg-muted rounded-md mb-4"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="publications">Publications</option>
            <option value="facts">Facts & Figures</option>
            <option value="protocols">Protocols</option>
            <option value="sops">SOPs</option>
            <option value="policies">Policy Documents</option>
          </select>
        </div>
        <TabsContent value="publications">
          <ResourceSection
            title="Publications"
            description="Access our latest research publications and findings on pregnancy and mpox."
            icon={<FileText className="h-8 w-8 text-primary" />}
            resourceType="publication"
          />
        </TabsContent>
        <TabsContent value="facts">
          <ResourceSection
            title="Facts & Figures"
            description="Explore key statistics and data related to pregnancy and mpox research."
            icon={<BookOpen className="h-8 w-8 text-primary" />}
            resourceType="facts"
          />
        </TabsContent>
        <TabsContent value="protocols">
          <ResourceSection
            title="Protocols"
            description="Find standardized research protocols for studying pregnancy and mpox."
            icon={<FileCheck className="h-8 w-8 text-primary" />}
            resourceType="protocols"
          />
        </TabsContent>
        <TabsContent value="sops">
          <ResourceSection
            title="Standard Operating Procedures"
            description="Access our collection of SOPs for consistent research practices."
            icon={<FileCode className="h-8 w-8 text-primary" />}
            resourceType="sops"
          />
        </TabsContent>
        <TabsContent value="policies">
          <ResourceSection
            title="Policy Documents"
            description="Review our policy guidelines and recommendations for pregnancy and mpox research."
            icon={<FileLock className="h-8 w-8 text-primary" />}
            resourceType="policies"
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ResourceSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  resourceType: string;
}

function ResourceSection({ title, description, icon, resourceType }: ResourceSectionProps) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DRUPAL_API_URL}/jsonapi/node/page`);
        const filteredResources = response.data.data.filter((page: any) => 
          page.attributes.title.toLowerCase().includes(resourceType.toLowerCase())
        );
        setResources(filteredResources);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchResources();
  }, [resourceType]);

  return (
    <Card className="my-6">
      <CardHeader>
        <div className="flex items-center space-x-4">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        {loading && <p className="mt-4">Loading resources...</p>}
        {error && <p className="mt-4 text-red-500">Error loading resources: {error}</p>}
        {!loading && !error && (
          <div className="mt-4 space-y-4">
            {resources.map((resource: any) => (
              <div key={resource.id} className="p-4 border rounded-lg">
                <div 
                  dangerouslySetInnerHTML={{ __html: resource.attributes.body?.value || '' }}
                  className="[&>*]:all-revert"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

