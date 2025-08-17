"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, Download, Eye, Copy, HelpCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSearchParams } from "next/navigation"

const templates = {
  "public-goods": {
    title: "Public Goods Template",
    sections: [
      {
        title: "Project Overview",
        placeholder:
          "Provide a clear, concise description of your public goods project. What problem does it solve? Who benefits from it in the Lil Nouns ecosystem and broader community?",
      },
      {
        title: "Project Details & Implementation",
        placeholder:
          "Detail how you will implement this project. For infrastructure: materials, construction, permits. For education: curriculum, delivery method. For community spaces: location, setup, accessibility. For environmental: methodology, impact measurement.",
      },
      {
        title: "Community Access & Sustainability",
        placeholder:
          "How will the community access and benefit from this public good? Will it be freely available? How will you ensure long-term sustainability and maintenance? Consider ongoing costs and community involvement.",
      },
      {
        title: "Budget Breakdown",
        placeholder:
          "Provide detailed budget breakdown including all project costs: materials, labor, permits, equipment, ongoing maintenance, insurance, and any other expenses. Be specific about one-time vs recurring costs.",
      },
      {
        title: "Timeline & Milestones",
        placeholder:
          "Outline your project timeline with specific milestones and deliverables. Include key phases like planning, permits/approvals, implementation, and launch.",
      },
      {
        title: "Team & Qualifications",
        placeholder:
          "Introduce your team members and their relevant experience for this project. Include any certifications, previous similar projects, or partnerships with local organizations/contractors.",
      },
    ],
  },
  development: {
    title: "Development / Software Template",
    sections: [
      {
        title: "Project Description",
        placeholder:
          "Describe your software project. What does it do? What problem does it solve for the Lil Nouns ecosystem?",
      },
      {
        title: "Technical Architecture",
        placeholder: "Explain the technical architecture, tech stack, and development approach.",
      },
      {
        title: "Licensing Strategy",
        placeholder: "What licensing will you utilize? Open source? Proprietary? How will this benefit the community?",
      },
      {
        title: "Development Timeline",
        placeholder: "Provide a detailed development timeline with milestones and deliverables.",
      },
      {
        title: "Budget & Resources",
        placeholder: "Break down development costs, infrastructure needs, and ongoing maintenance.",
      },
      {
        title: "Post-Launch Support",
        placeholder: "How will you maintain and support the software after launch?",
      },
    ],
  },
  "arts-creative": {
    title: "Arts / Creative Template",
    sections: [
      {
        title: "Creative Vision",
        placeholder:
          "Describe your creative project. What's your artistic vision? How does it align with Lil Nouns culture?",
      },
      {
        title: "Creative Process",
        placeholder: "Explain your creative process, techniques, and artistic approach.",
      },
      {
        title: "CC0 & Rights",
        placeholder:
          "Will your creations be CC0? How will you handle intellectual property and community usage rights?",
      },
      {
        title: "Distribution Strategy",
        placeholder: "How will you distribute your work? Consider Zora, social media, exhibitions, etc.",
      },
      {
        title: "Budget & Materials",
        placeholder: "Detail costs for materials, tools, software, and any other creative resources needed.",
      },
      {
        title: "Community Engagement",
        placeholder: "How will you engage with the Lil Nouns community throughout the creative process?",
      },
    ],
  },
  "irl-event": {
    title: "IRL Event Template",
    sections: [
      {
        title: "Event Overview",
        placeholder:
          "Describe your IRL event. What type of event is it? What's the purpose and how does it benefit the Lil Nouns community?",
      },
      {
        title: "Event Details",
        placeholder:
          "Provide specific details: date, location, duration, expected attendance, format (conference, meetup, workshop, etc.)",
      },
      {
        title: "Target Audience",
        placeholder:
          "Who is the target audience? How will you attract Lil Nouns community members and other relevant attendees?",
      },
      {
        title: "Budget Breakdown",
        placeholder:
          "Detail all costs: venue rental, catering, speakers, marketing, materials, staff, insurance, and contingency funds.",
      },
      {
        title: "Marketing & Promotion",
        placeholder:
          "How will you promote the event? What channels will you use to reach the community and ensure good attendance?",
      },
      {
        title: "Success Metrics",
        placeholder:
          "How will you measure the success of the event? What are your goals for attendance, engagement, and community impact?",
      },
    ],
  },
  "conference-sponsorship": {
    title: "Conference Sponsorship Template",
    sections: [
      {
        title: "Conference Details",
        placeholder:
          "Provide details about the conference: name, dates, location, expected attendance, and relevance to web3/NFT/DAO space.",
      },
      {
        title: "Sponsorship Package",
        placeholder:
          "What sponsorship tier are you requesting? What benefits does Lil Nouns receive (booth space, speaking slots, branding, etc.)?",
      },
      {
        title: "Community Value",
        placeholder:
          "How does this sponsorship benefit the Lil Nouns community? Will there be networking opportunities, educational content, or brand exposure?",
      },
      {
        title: "Activation Plan",
        placeholder:
          "How will you activate the sponsorship? Will you host a booth, give talks, organize meetups, or create special content?",
      },
      {
        title: "Budget & ROI",
        placeholder:
          "Break down the sponsorship costs and explain the expected return on investment for the Lil Nouns brand and community.",
      },
      {
        title: "Reporting & Follow-up",
        placeholder:
          "How will you report back to the community? What metrics will you track and share post-conference?",
      },
    ],
  },
  "physical-goods": {
    title: "Physical Goods Template",
    sections: [
      {
        title: "Product Description",
        placeholder:
          "Describe the physical goods you want to create. What are they? How do they represent or promote Lil Nouns?",
      },
      {
        title: "Design & Branding",
        placeholder:
          "Explain the design concept. How will you incorporate Lil Nouns branding? Will designs be CC0? Include mockups if available.",
      },
      {
        title: "Production Plan",
        placeholder:
          "Detail your production process: manufacturers, materials, quality control, timeline from design to delivery.",
      },
      {
        title: "Distribution Strategy",
        placeholder:
          "How will you distribute the goods? Direct sales, giveaways, events, online store? What's your fulfillment plan?",
      },
      {
        title: "Budget & Pricing",
        placeholder:
          "Break down all costs: design, production, shipping, storage, platform fees. What will be the pricing strategy?",
      },
      {
        title: "Community Impact",
        placeholder:
          "How do these physical goods benefit the Lil Nouns community? Will proceeds support the DAO or other initiatives?",
      },
    ],
  },
  "charity-donations": {
    title: "Charity / Donations Template",
    sections: [
      {
        title: "Charitable Cause",
        placeholder:
          "Describe the charitable cause or organization. What is their mission? Why is this cause important to the Lil Nouns community?",
      },
      {
        title: "Organization Details",
        placeholder:
          "Provide details about the charity: registration status, track record, leadership, and how they use donations effectively.",
      },
      {
        title: "Donation Impact",
        placeholder:
          "Explain how the donation will be used. What specific impact will this funding have? Include measurable outcomes if possible.",
      },
      {
        title: "Community Alignment",
        placeholder:
          "How does this charitable initiative align with Lil Nouns values? Will it help build positive brand association?",
      },
      {
        title: "Transparency & Reporting",
        placeholder:
          "How will you ensure transparency? What reporting will you provide to show how funds were used and impact achieved?",
      },
      {
        title: "Recognition & Promotion",
        placeholder:
          "How will the donation be recognized? Will there be promotional opportunities that benefit both the charity and Lil Nouns?",
      },
    ],
  },
  "marketing-media": {
    title: "Marketing / Advertising / Media Template",
    sections: [
      {
        title: "Campaign Overview",
        placeholder:
          "Describe your marketing campaign. What are the objectives? What message do you want to communicate about Lil Nouns?",
      },
      {
        title: "Target Audience",
        placeholder:
          "Who is your target audience? Demographics, interests, platforms they use. How will this expand or engage the Lil Nouns community?",
      },
      {
        title: "Creative Strategy",
        placeholder:
          "Explain your creative approach. What type of content will you create? How will it represent Lil Nouns brand and values?",
      },
      {
        title: "Media Channels",
        placeholder:
          "Which platforms and channels will you use? Social media, traditional advertising, influencer partnerships, PR, etc.?",
      },
      {
        title: "Budget & Timeline",
        placeholder:
          "Break down costs for creative development, media buying, influencer fees, and management. Include campaign timeline.",
      },
      {
        title: "Success Metrics",
        placeholder:
          "How will you measure success? Include KPIs like reach, engagement, conversions, brand awareness, or community growth.",
      },
    ],
  },
  "defi-treasury": {
    title: "DeFi / Treasury Management Template",
    sections: [
      {
        title: "Strategy Overview",
        placeholder:
          "Describe your DeFi or treasury management strategy. What are the goals? How does this benefit the Lil Nouns treasury?",
      },
      {
        title: "Protocols & Platforms",
        placeholder:
          "Which DeFi protocols or platforms will you use? Explain why these are suitable and what due diligence you've performed.",
      },
      {
        title: "Risk Assessment",
        placeholder:
          "Detail the risks involved: smart contract risk, impermanent loss, market volatility, etc. How will you mitigate these risks?",
      },
      {
        title: "Expected Returns",
        placeholder:
          "What returns do you expect? Provide realistic projections based on historical data and current market conditions.",
      },
      {
        title: "Management & Monitoring",
        placeholder:
          "How will you actively manage the positions? What monitoring tools and processes will you use? Who has access?",
      },
      {
        title: "Exit Strategy",
        placeholder:
          "What's your exit strategy? Under what conditions would you unwind positions? How will you report performance to the DAO?",
      },
    ],
  },
}

export default function DraftingPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("")
  const [proposalData, setProposalData] = useState<Record<string, string>>({})
  const [proposalTitle, setProposalTitle] = useState("")
  const [requestedAmount, setRequestedAmount] = useState("")
  const [copySuccess, setCopySuccess] = useState(false)

  const searchParams = useSearchParams()

  useEffect(() => {
    const template = searchParams.get("template")
    if (template && templates[template as keyof typeof templates]) {
      setSelectedTemplate(template)
    }
  }, [searchParams])

  const handleSectionChange = (sectionTitle: string, value: string) => {
    setProposalData((prev) => ({
      ...prev,
      [sectionTitle]: value,
    }))
  }

  const generateProposal = () => {
    if (!selectedTemplate) return ""

    let proposal = `# ${proposalTitle}\n\n`
    proposal += `**Requested Amount:** ${requestedAmount}\n\n`

    templates[selectedTemplate as keyof typeof templates].sections.forEach((section) => {
      const content = proposalData[section.title] || ""
      proposal += `## ${section.title}\n\n${content}\n\n`
    })

    return proposal
  }

  const downloadProposal = () => {
    const content = generateProposal()
    const blob = new Blob([content], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${proposalTitle.replace(/\s+/g, "-").toLowerCase()}-proposal.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const copyToClipboard = async () => {
    const content = generateProposal()
    try {
      await navigator.clipboard.writeText(content)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 dark:text-gray-400 dark:hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Templates
            </Link>
            <ThemeToggle />
          </div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">Draft Your Proposal</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Use our templates to create a comprehensive proposal, then copy and paste it to lilnouns.camp for
            submission.
          </p>
        </div>

        {!selectedTemplate ? (
          <>
            {/* Template Selection */}
            <Card className="mb-8 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Choose a Template</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Select the template that best matches your proposal category. Each template includes category-specific
                  guidance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(templates).map(([key, template]) => (
                    <Card
                      key={key}
                      className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-blue-200 dark:bg-gray-800 dark:border-gray-700"
                      onClick={() => setSelectedTemplate(key)}
                    >
                      <CardContent className="p-6 text-center">
                        <FileText className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                        <h3 className="font-semibold mb-2 dark:text-white">{template.title}</h3>
                        <Badge variant="secondary">{template.sections.length} sections</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Custom Template Option */}
            <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Need a Custom Template?</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  If none of the templates fit your project, you can start with a blank proposal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" onClick={() => setSelectedTemplate("custom")}>
                  Start Blank Proposal
                </Button>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            {/* Proposal Editor */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Editor */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="dark:text-white">
                          {templates[selectedTemplate as keyof typeof templates]
                            ? templates[selectedTemplate as keyof typeof templates].title
                            : "Custom Proposal"}
                        </CardTitle>
                        <CardDescription className="dark:text-gray-400">
                          Fill out each section to build your comprehensive proposal
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setSelectedTemplate("")}>
                        Change Template
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title" className="dark:text-white">
                          Proposal Title
                        </Label>
                        <Input
                          id="title"
                          placeholder="Enter your proposal title"
                          value={proposalTitle}
                          onChange={(e) => setProposalTitle(e.target.value)}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="amount" className="dark:text-white">
                          Requested Amount
                        </Label>
                        <Input
                          id="amount"
                          placeholder="e.g., 100 ETH"
                          value={requestedAmount}
                          onChange={(e) => setRequestedAmount(e.target.value)}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                    </div>

                    {/* Template Sections */}
                    {templates[selectedTemplate as keyof typeof templates] && (
                      <div className="space-y-6">
                        {templates[selectedTemplate as keyof typeof templates].sections.map((section, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Label htmlFor={`section-${index}`} className="dark:text-white">
                                {section.title}
                              </Label>
                              <HelpCircle className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                            </div>
                            <Textarea
                              id={`section-${index}`}
                              placeholder={section.placeholder}
                              value={proposalData[section.title] || ""}
                              onChange={(e) => handleSectionChange(section.title, e.target.value)}
                              className="min-h-[120px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Preview & Actions */}
              <div className="space-y-6">
                <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="dark:text-white">Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      className="w-full lil-nouns-pink hover:opacity-90"
                      onClick={copyToClipboard}
                      disabled={!proposalTitle}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      {copySuccess ? "Copied!" : "Copy Proposal"}
                    </Button>
                    <Button
                      className="w-full bg-transparent"
                      variant="outline"
                      onClick={downloadProposal}
                      disabled={!proposalTitle}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download as Markdown
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="https://lilnouns.camp" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Go to lilnouns.camp
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="dark:text-white">Tips for Success</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="p-3 bg-blue-50 rounded-lg dark:bg-blue-900 dark:text-blue-100">
                      <strong>Be Specific:</strong> Provide detailed information about your project, timeline, and
                      budget.
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg dark:bg-green-900 dark:text-green-100">
                      <strong>Show Value:</strong> Clearly articulate how your project benefits the Lil Nouns ecosystem.
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg dark:bg-purple-900 dark:text-purple-100">
                      <strong>Consider Licensing:</strong> Think about how your work will be shared with the community.
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg dark:bg-orange-900 dark:text-orange-100">
                      <strong>Payment Structure:</strong> Consider requesting payments in milestones rather than lump
                      sum.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Preview Tab */}
            <Card className="mt-8 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center dark:text-white">
                  <Eye className="w-5 h-5 mr-2" />
                  Proposal Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="formatted" className="w-full">
                  <TabsList>
                    <TabsTrigger value="formatted">Formatted View</TabsTrigger>
                    <TabsTrigger value="markdown">Markdown</TabsTrigger>
                  </TabsList>
                  <TabsContent value="formatted" className="mt-4">
                    <div className="prose max-w-none dark:text-white">
                      {proposalTitle && <h1 className="text-2xl font-bold mb-4 dark:text-white">{proposalTitle}</h1>}
                      {requestedAmount && (
                        <p className="text-lg mb-6 dark:text-white">
                          <strong>Requested Amount:</strong> {requestedAmount}
                        </p>
                      )}
                      {templates[selectedTemplate as keyof typeof templates] &&
                        templates[selectedTemplate as keyof typeof templates].sections.map((section, index) => {
                          const content = proposalData[section.title]
                          if (!content) return null
                          return (
                            <div key={index} className="mb-6">
                              <h2 className="text-xl font-semibold mb-2 dark:text-white">{section.title}</h2>
                              <p className="whitespace-pre-wrap dark:text-white">{content}</p>
                            </div>
                          )
                        })}
                    </div>
                  </TabsContent>
                  <TabsContent value="markdown" className="mt-4">
                    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto dark:bg-gray-700 dark:text-gray-100">
                      {generateProposal()}
                    </pre>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Next Step CTA */}
            <Card className="mt-8 lil-nouns-blue text-white shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to Submit?</h3>
                <p className="mb-6 text-white">
                  Copy your completed proposal above and paste it into the proposal submission form on lilnouns.camp to
                  officially submit it to the DAO for voting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" onClick={copyToClipboard} disabled={!proposalTitle}>
                    <Copy className="w-4 h-4 mr-2" />
                    {copySuccess ? "Copied!" : "Copy Proposal"}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                    asChild
                  >
                    <Link href="https://lilnouns.camp" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Submit on lilnouns.camp
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
