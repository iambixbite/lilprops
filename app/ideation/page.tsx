"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Lightbulb,
  TrendingUp,
  Users,
  Code,
  Palette,
  Calendar,
  Package,
  Heart,
  Megaphone,
  DollarSign,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "public-goods",
    title: "Public Goods",
    icon: <Users className="w-8 h-8" />,
    description: "Infrastructure, tools, and resources that benefit the entire ecosystem",
    examples: ["Developer tools", "Open source libraries", "Educational resources"],
    pastProposals: 45,
    successRate: 78,
    avgFunding: "125 ETH",
    color: "lil-nouns-green",
  },
  {
    id: "development",
    title: "Development / Software",
    icon: <Code className="w-8 h-8" />,
    description: "Software applications, platforms, and technical solutions",
    examples: ["Lil Nouns Extensions", "Web applications", "Smart contracts", "APIs"],
    pastProposals: 89,
    successRate: 72,
    avgFunding: "95 ETH",
    color: "lil-nouns-blue",
  },
  {
    id: "arts-creative",
    title: "Arts / Creative",
    icon: <Palette className="w-8 h-8" />,
    description: "Creative projects, art installations, and cultural initiatives",
    examples: ["Digital art", "Music projects", "Creative collaborations", "NFT collections"],
    pastProposals: 67,
    successRate: 65,
    avgFunding: "75 ETH",
    color: "lil-nouns-purple",
  },
  {
    id: "events",
    title: "IRL Event / Conference Sponsorship",
    icon: <Calendar className="w-8 h-8" />,
    description: "Real-world events, conferences, and community gatherings",
    examples: ["Conferences", "Meetups", "Workshops", "Community events"],
    pastProposals: 34,
    successRate: 82,
    avgFunding: "150 ETH",
    color: "lil-nouns-red",
  },
  {
    id: "physical-goods",
    title: "Physical Goods",
    icon: <Package className="w-8 h-8" />,
    description: "Tangible products and merchandise",
    examples: ["Merchandise", "Hardware", "Books", "Collectibles"],
    pastProposals: 28,
    successRate: 58,
    avgFunding: "60 ETH",
    color: "lil-nouns-yellow",
  },
  {
    id: "charity",
    title: "Charity / Donations",
    icon: <Heart className="w-8 h-8" />,
    description: "Charitable initiatives and social impact projects",
    examples: ["Disaster relief", "Education funding", "Healthcare initiatives"],
    pastProposals: 19,
    successRate: 71,
    avgFunding: "100 ETH",
    color: "lil-nouns-pink",
  },
  {
    id: "marketing",
    title: "Marketing / Advertising / Media",
    icon: <Megaphone className="w-8 h-8" />,
    description: "Marketing campaigns, media production, and brand initiatives",
    examples: ["Ad campaigns", "Content creation", "Brand partnerships"],
    pastProposals: 42,
    successRate: 63,
    avgFunding: "80 ETH",
    color: "lil-nouns-indigo",
  },
  {
    id: "defi-treasury",
    title: "DeFi / Treasury Management",
    icon: <DollarSign className="w-8 h-8" />,
    description: "Financial products, treasury management, and DeFi initiatives",
    examples: ["Yield strategies", "Treasury diversification", "Financial tools"],
    pastProposals: 15,
    successRate: 80,
    avgFunding: "200 ETH",
    color: "lil-nouns-teal",
  },
  {
    id: "other",
    title: "Other",
    icon: <HelpCircle className="w-8 h-8" />,
    description: "Unique projects that don't fit into standard categories",
    examples: ["Experimental projects", "Research initiatives", "Novel concepts"],
    pastProposals: 23,
    successRate: 52,
    avgFunding: "70 ETH",
    color: "lil-nouns-gray",
  },
]

export default function IdeationPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory)

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/research"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Research
          </Link>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">Ideation Phase</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Choose your proposal category to explore similar past proposals and get inspired for your own project.
          </p>
        </div>

        {!selectedCategory ? (
          <>
            {/* Category Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 group dark:bg-gray-800 dark:border-gray-700"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg dark:text-white">{category.title}</CardTitle>
                    <CardDescription className="dark:text-white">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Past Proposals:</span>
                        <span className="font-semibold">{category.pastProposals}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Success Rate:</span>
                        <span className="font-semibold text-green-600">{category.successRate}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Avg Funding:</span>
                        <span className="font-semibold">{category.avgFunding}</span>
                      </div>
                      <div className="pt-2">
                        <p className="text-xs text-gray-500 mb-2 dark:text-gray-300">Common examples:</p>
                        <div className="flex flex-wrap gap-1">
                          {category.examples.slice(0, 2).map((example, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Next Step CTA */}
            <Card className="mt-12 lil-nouns-yellow text-black">
              <CardContent className="p-8 text-center">
                <Lightbulb className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Need Help Choosing?</h3>
                <p className="mb-6 text-black">
                  Not sure which category fits your idea? Start with the most similar one, or choose "Other" for unique
                  projects.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/drafting">Skip to Drafting Phase</Link>
                </Button>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            {/* Selected Category Details */}
            <div className="mb-8">
              <Button variant="outline" onClick={() => setSelectedCategory(null)} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Categories
              </Button>

              <Card className="mb-8 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 ${selectedCategoryData?.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      {selectedCategoryData?.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl dark:text-white">{selectedCategoryData?.title}</CardTitle>
                      <CardDescription className="text-lg dark:text-white">
                        {selectedCategoryData?.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{selectedCategoryData?.pastProposals}</div>
                      <div className="text-gray-600 dark:text-gray-300">Past Proposals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">{selectedCategoryData?.successRate}%</div>
                      <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">{selectedCategoryData?.avgFunding}</div>
                      <div className="text-gray-600 dark:text-gray-300">Average Funding</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Examples and Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Common Project Types</CardTitle>
                  <CardDescription className="dark:text-white">Popular examples in this category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedCategoryData?.examples.map((example, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="dark:text-white">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Success Factors</CardTitle>
                  <CardDescription className="dark:text-white">
                    What makes proposals in this category successful
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg dark:bg-gray-700">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium dark:text-white">Clear Value Proposition</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Clearly articulate the benefit to the Lil Nouns ecosystem
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg dark:bg-gray-700">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium dark:text-white">Detailed Budget</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Provide comprehensive budget breakdown
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg dark:bg-gray-700">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium dark:text-white">Community Engagement</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Show evidence of community support and feedback
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Next Steps */}
            <Card className="lil-nouns-pink text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Drafting?</h3>
                <p className="mb-6 text-white">
                  Now that you've explored this category, let's move to the drafting phase where you'll create your
                  proposal using our templates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/drafting">Start Drafting Your Proposal</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-blue-600 border-blue-600 bg-white hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    asChild
                  >
                    <Link href="/research">Research More Proposals</Link>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-white">
                  All proposals will be submitted to the Lil Nouns DAO for consideration.
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
