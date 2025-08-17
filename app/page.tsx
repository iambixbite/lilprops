import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  const proposalCategories = [
    {
      id: "public-goods",
      title: "Public Goods",
      description: "Infrastructure, tools, and resources that benefit the entire Lil Nouns ecosystem",
      icon: <FileText className="w-8 h-8" />,
      examples: ["Developer tools", "Community infrastructure", "Open source libraries"],
      sections: 6,
    },
    {
      id: "development",
      title: "Development / Software",
      description: "Applications, websites, and software projects for the community",
      icon: <FileText className="w-8 h-8" />,
      examples: ["Web applications", "Mobile apps", "Smart contracts"],
      sections: 6,
    },
    {
      id: "arts-creative",
      title: "Arts / Creative",
      description: "Creative projects, artwork, and cultural contributions",
      icon: <FileText className="w-8 h-8" />,
      examples: ["Digital art", "Music projects", "Creative campaigns"],
      sections: 6,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 lil-nouns-pink rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold dark:text-white">Lil Nouns Proposal Templates</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/drafting"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Templates
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4 dark:bg-gray-700 dark:text-gray-200">
            Powered by Lil Nouns DAO
          </Badge>
          <h1 className="text-5xl font-bold mb-6 text-lil-nouns-blue">Draft Your Lil Nouns Proposal</h1>
          <p className="text-xl text-gray-600 dark:text-white mb-8 leading-relaxed">
            Choose from our comprehensive proposal templates to create a professional submission for Lil Nouns DAO. Each
            template includes all the sections and guidance you need to craft a compelling proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="lil-nouns-pink hover:opacity-90">
              <Link href="/drafting">
                Start Drafting <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 bg-transparent"
            >
              <Link href="https://lilnouns.camp" target="_blank" rel="noopener noreferrer">
                Visit lilnouns.camp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Template Categories */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Choose Your Proposal Template</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Select the template that best matches your project type. Each template includes category-specific sections
              and guidance to help you create a comprehensive proposal.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {proposalCategories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-all duration-300 group dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {category.icon}
                    </div>
                    <Badge variant="secondary">{category.sections} sections</Badge>
                  </div>
                  <CardTitle className="text-xl dark:text-white">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Examples:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {category.examples.map((example, index) => (
                        <li key={index}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full group-hover:lil-nouns-blue group-hover:text-white transition-all bg-transparent"
                    variant="outline"
                    asChild
                  >
                    <Link href={`/drafting?template=${category.id}`}>Use This Template</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              asChild
              className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 border border-blue-600 transition-all"
            >
              <Link href="/drafting">
                Show More Templates <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Simple 3-Step Process</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Create professional proposals in minutes with our guided template system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 lil-nouns-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Choose Template</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Select the proposal template that matches your project category
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 lil-nouns-pink rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Fill Sections</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete each section with guidance and examples provided
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 lil-nouns-yellow rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Copy & Submit</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Copy your completed proposal and submit it on lilnouns.camp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lil-nouns-blue text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Create Your Proposal?</h2>
          <p className="text-xl mb-8 text-white">
            Join hundreds of builders who have successfully funded their projects through Lil Nouns DAO. Start with our
            proven templates and increase your chances of approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/drafting">
                Browse Templates <FileText className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="https://lilnouns.camp" target="_blank" rel="noopener noreferrer">
                Visit lilnouns.camp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 lil-nouns-pink rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">N</span>
                </div>
                <span className="font-bold">Lil Nouns Templates</span>
              </div>
              <p className="text-gray-400 text-sm">Professional proposal templates for Lil Nouns DAO submissions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Templates</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/drafting?template=public-goods" className="hover:text-white">
                    Public Goods
                  </Link>
                </li>
                <li>
                  <Link href="/drafting?template=development" className="hover:text-white">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="/drafting?template=arts-creative" className="hover:text-white">
                    Arts & Creative
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="https://lilnouns.camp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    lilnouns.camp
                  </a>
                </li>
                <li>
                  <a href="https://nouns.wtf" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Nouns DAO
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Farcaster
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Lil Nouns Proposal Templates. Built for the Lil Nouns community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
