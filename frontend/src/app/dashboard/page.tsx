'use client'

import Link from 'next/link'
import { 
  Merge, Minimize2, Image, FileText, Edit, Lock, Unlock, 
  Code2, Hash, Braces, Type, Wand2, FileJson, ArrowRight,
  Zap, Shield, Sparkles
} from 'lucide-react'

type ToolCard = {
  title: string
  description: string
  href: string
  icon: any
  color: string
  category: string
}

const tools: ToolCard[] = [
  // PDF Tools
  {
    title: 'Compress PDF',
    description: 'Reduce PDF file size without losing quality',
    href: '/dashboard/compress',
    icon: Minimize2,
    color: 'bg-blue-500',
    category: 'PDF'
  },
  {
    title: 'Merge PDFs',
    description: 'Combine multiple PDF files into one',
    href: '/dashboard/merge',
    icon: Merge,
    color: 'bg-purple-500',
    category: 'PDF'
  },
  {
    title: 'PDF to Image',
    description: 'Convert PDF pages to image files',
    href: '/dashboard/pdf-to-image',
    icon: Image,
    color: 'bg-green-500',
    category: 'PDF'
  },
  {
    title: 'Image to PDF',
    description: 'Convert images to PDF documents',
    href: '/dashboard/image-to-pdf',
    icon: Image,
    color: 'bg-teal-500',
    category: 'PDF'
  },
  {
    title: 'Extract Text',
    description: 'Extract text content from PDF files',
    href: '/dashboard/extract-text',
    icon: FileText,
    color: 'bg-orange-500',
    category: 'PDF'
  },
  {
    title: 'Protect PDF',
    description: 'Add password protection to your PDFs',
    href: '/dashboard/encrypt-pdf',
    icon: Lock,
    color: 'bg-red-500',
    category: 'PDF'
  },
  {
    title: 'Unlock PDF',
    description: 'Remove password protection from PDFs',
    href: '/dashboard/decrypt-pdf',
    icon: Unlock,
    color: 'bg-yellow-500',
    category: 'PDF'
  },
  {
    title: 'View PDF',
    description: 'View and preview PDF documents',
    href: '/dashboard/view-pdf',
    icon: Edit,
    color: 'bg-indigo-500',
    category: 'PDF'
  },
  // Other Tools
  {
    title: 'Encoders/Decoders',
    description: 'Encode and decode text in various formats',
    href: '/dashboard/encoder',
    icon: Code2,
    color: 'bg-cyan-500',
    category: 'Text'
  },
  {
    title: 'Cryptography',
    description: 'Encrypt and decrypt text securely',
    href: '/dashboard/cryptography',
    icon: Hash,
    color: 'bg-pink-500',
    category: 'Security'
  },
  {
    title: 'Formatting',
    description: 'Format and beautify your code',
    href: '/dashboard/formatting',
    icon: Braces,
    color: 'bg-violet-500',
    category: 'Text'
  },
  {
    title: 'Text Transform',
    description: 'Transform text case and style',
    href: '/dashboard/text-transform',
    icon: Type,
    color: 'bg-lime-500',
    category: 'Text'
  },
  {
    title: 'Generators',
    description: 'Generate UUIDs, passwords, and more',
    href: '/dashboard/generators',
    icon: Wand2,
    color: 'bg-amber-500',
    category: 'Utilities'
  },
  {
    title: 'JSON Editor',
    description: 'Edit and format JSON data',
    href: '/dashboard/json-editor',
    icon: FileJson,
    color: 'bg-emerald-500',
    category: 'JSON'
  },
]

const stats = [
  { label: 'Total Tools', value: '14+', icon: Zap, color: 'text-blue-600' },
  { label: 'Categories', value: '5', icon: Sparkles, color: 'text-purple-600' },
  { label: 'Secure & Private', value: '100%', icon: Shield, color: 'text-green-600' },
]

export default function DashboardHome() {
  const categories = Array.from(new Set(tools.map(tool => tool.category)))

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome to Your Toolkit
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All-in-one suite of powerful tools for PDF processing, text manipulation, and more
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="h-8 w-1 bg-blue-600 rounded-full"></span>
              {category} Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tools
                .filter(tool => tool.category === category)
                .map((tool) => {
                  const Icon = tool.icon
                  return (
                    <Link
                      key={tool.title}
                      href={tool.href}
                      className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                    >
                      <div className="flex flex-col h-full">
                        <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {tool.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                          {tool.description}
                        </p>
                        
                        <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                          <span>Try it now</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
