"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, ExternalLink, TrendingUp, TrendingDown, Minus } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

// Mock data for proposals
const mockProposals = [
  {
    id: 468,
    title: "Lil Nouns Comic Book Series",
    category: "Arts / Creative",
    status: "Executed",
    votingPercentage: 89,
    requestedAmount: "50 ETH",
    description: "A series of comic books featuring Lil Nouns characters in various adventures",
    proposer: "comicartist.eth",
  },
  {
    id: 467,
    title: "Developer Tools for Lil Nouns Ecosystem",
    category: "Development / Software",
    status: "Executed",
    votingPercentage: 76,
    requestedAmount: "120 ETH",
    description: "Building comprehensive developer tools and SDKs for the Lil Nouns ecosystem",
    proposer: "devtools.eth",
  },
  {
    id: 466,
    title: "Lil Nouns Physical Merchandise Store",
    category: "Physical Goods",
    status: "Defeated",
    votingPercentage: 34,
    requestedAmount: "80 ETH",
    description: "Launch an official merchandise store with Lil Nouns-branded physical products",
    proposer: "merchandise.eth",
  },
  {
    id: 465,
    title: "Public Goods Infrastructure Grant",
    category: "Public Goods",
    status: "Executed",
    votingPercentage: 92,
    requestedAmount: "200 ETH",
    description: "Funding for critical public goods infrastructure in the Ethereum ecosystem",
    proposer: "publicgoods.eth",
  },
  {
    id: 464,
    title: "Lil Nouns Conference 2024",
    category: "IRL Event / Conference Sponsorship",
    status: "Executed",
    votingPercentage: 67,
    requestedAmount: "150 ETH",
    description: "Annual conference bringing together the Lil Nouns community",
    proposer: "events.eth",
  },
  {
    id: 463,
    title: "Charity Partnership Program",
    category: "Charity / Donations",
    status: "Canceled",
    votingPercentage: 0,
    requestedAmount: "75 ETH",
    description: "Partnership with various charities for community impact",
    proposer: "charity.eth",
  },
]

const categories = [
  "All Categories",
  "Public Goods",
  "Development / Software",
  "Arts / Creative",
  "IRL Event / Conference Sponsorship",
  "Physical Goods",
  "Charity / Donations",
  "Marketing / Advertising / Media",
  "DeFi / Treasury Management",
  "Other",
]

const statuses = ["All Statuses", "Executed", "Defeated", "Canceled"]

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedStatus, setSelectedStatus] = useState("All Statuses")
  const [sortBy, setSortBy] = useState("newest")

  const filteredProposals = mockProposals.filter((proposal) => {
    const matchesSearch =
      proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || proposal.category === selectedCategory
    const matchesStatus = selectedStatus === "All Statuses" || proposal.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Executed":
        return "bg-green-100 text-green-800"
      case "Defeated":
        return "bg-red-100 text-red-800"
      case "Canceled":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const getVotingIcon = (percentage: number) => {
    if (percentage >= 70) return <TrendingUp className="w-4 h-4 text-green-600" />
    if (percentage >= 40) return <Minus className="w-4 h-4 text-yellow-600" />
    return <TrendingDown className="w-4 h-4 text-red-600" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">Research Past Lil Nouns Proposals</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Explore Lil NounsDAO's proposal history to understand what works and learn from past submissions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">312</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Executed</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-600">134</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Defeated</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-gray-600">22</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Canceled</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">468</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Total Proposals</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8 hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center dark:text-white">
              <Filter className="w-5 h-5 mr-2" />
              Filter & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search proposals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="voting-high">Highest Voting %</SelectItem>
                  <SelectItem value="voting-low">Lowest Voting %</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold dark:text-white">{filteredProposals.length} Proposals Found</h2>
            <Button asChild>
              <Link href="/ideation">
                Ready to Ideate? <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </Button>
          </div>

          {filteredProposals.map((proposal) => (
            <Card key={proposal.id} className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="dark:bg-gray-700 dark:text-white">
                        #{proposal.id}
                      </Badge>
                      <Badge className={`${getStatusColor(proposal.status)} dark:text-white`}>{proposal.status}</Badge>
                      <Badge variant="secondary" className="dark:bg-gray-700 dark:text-white">
                        {proposal.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 dark:text-white">{proposal.title}</h3>
                    <p className="text-gray-600 mb-3 dark:text-gray-300">{proposal.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>By {proposal.proposer}</span>
                      <span>Requested: {proposal.requestedAmount}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      {getVotingIcon(proposal.votingPercentage)}
                      <span className="font-semibold dark:text-white">{proposal.votingPercentage}%</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Step CTA */}
        <Card className="mt-12 lil-nouns-blue text-white hover:shadow-md transition-shadow">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready for the Next Phase?</h3>
            <p className="mb-6 text-white">
              Now that you've researched past proposals, it's time to start ideating your own project.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/ideation">
                Start Ideation Phase <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <ThemeToggle />
      </div>
    </div>
  )
}
