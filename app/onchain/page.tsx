import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Wallet, Users, DollarSign, ExternalLink, AlertTriangle, CheckCircle, Info } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const submissionOptions = [
  {
    title: "Own a Lil Noun",
    icon: <Wallet className="w-8 h-8" />,
    description: "If you own a Lil Noun NFT, you can propose directly to the DAO",
    requirements: [
      "Own at least 1 Lil Noun NFT",
      "Lil Noun must be in your wallet at proposal time",
      "No additional fees required",
    ],
    process: [
      "Connect your wallet to lilnouns.wtf",
      "Navigate to the governance section",
      "Click 'Create Proposal'",
      "Fill in your proposal details",
      "Submit for voting",
    ],
    cost: "Free (gas fees only)",
    timeToVote: "Immediate",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Find a Sponsor",
    icon: <Users className="w-8 h-8" />,
    description: "A Lil Noun holder can sponsor your proposal and submit it on your behalf",
    requirements: [
      "Find a willing Lil Noun holder to sponsor",
      "Sponsor must own a Lil Noun at submission time",
      "Build trust and rapport with sponsor",
    ],
    process: [
      "Present your proposal to potential sponsors",
      "Negotiate terms and expectations",
      "Sponsor submits proposal on your behalf",
      "Proposal goes to vote immediately",
    ],
    cost: "Free (sponsor pays gas)",
    timeToVote: "Immediate",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Submit as Candidate",
    icon: <DollarSign className="w-8 h-8" />,
    description: "Pay a fee to have your proposal considered by Lil Noun holders",
    requirements: [
      "Pay the candidate fee (currently ~0.01% of treasury)",
      "Proposal must meet minimum requirements",
      "Community feedback recommended",
    ],
    process: [
      "Submit proposal with candidate fee",
      "Proposal enters candidate queue",
      "Lil Noun holders can promote to full proposal",
      "If promoted, proposal goes to vote",
    ],
    cost: "~25-50 ETH (varies with treasury size)",
    timeToVote: "Depends on promotion",
    color: "from-purple-500 to-pink-600",
  },
]

const tips = [
  {
    title: "Timing Matters",
    description: "Submit proposals when the community is most active, typically mid-week",
    icon: <Info className="w-5 h-5" />,
  },
  {
    title: "Engage During Voting",
    description: "Be available to answer questions and address concerns during the voting period",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: "Have a Backup Plan",
    description: "Consider what you'll do if the proposal doesn't pass - can you revise and resubmit?",
    icon: <AlertTriangle className="w-5 h-5" />,
  },
]

export default function OnchainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <Link
              href="/feedback"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Feedback
            </Link>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              Submit Your Proposal to Lil Nouns DAO
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              You're ready for the final step! Choose how you want to submit your proposal to Lil NounsDAO. Each option
              has different requirements and processes.
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Submission Options */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Submission Options</h2>

          {submissionOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-zinc-900 dark:border-zinc-700">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center text-white`}
                  >
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{option.title}</CardTitle>
                    <CardDescription className="text-base mt-2 text-gray-600 dark:text-gray-400">
                      {option.description}
                    </CardDescription>
                    <div className="flex gap-4 mt-3">
                      <Badge variant="outline">Cost: {option.cost}</Badge>
                      <Badge variant="outline">Time to Vote: {option.timeToVote}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Requirements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Requirements</h4>
                    <ul className="space-y-2">
                      {option.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Process</h4>
                    <ol className="space-y-2">
                      {option.process.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                          <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Considerations */}
        <Card className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-400">
              <AlertTriangle className="w-5 h-5" />
              Important Considerations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-amber-800 dark:text-amber-400">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Proposal Fees:</strong> Candidate submissions require a significant fee that is not refunded
                  if the proposal fails. Make sure you've done thorough preparation.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Voting Period:</strong> Once submitted, proposals have a fixed voting period. Be prepared to
                  engage with the community during this time.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Execution:</strong> If your proposal passes, you'll be expected to deliver on your
                  commitments. Make sure your timeline and budget are realistic.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Tips */}
        <Card className="mb-8 dark:bg-zinc-900 dark:border-zinc-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Tips for Onchain Success</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Maximize your chances of proposal success with these proven strategies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg dark:bg-zinc-800">
                  <div className="text-blue-600 flex-shrink-0">{tip.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">{tip.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card className="mb-8 dark:bg-zinc-900 dark:border-zinc-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Helpful Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="justify-start h-auto p-4 dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-600 bg-transparent"
                asChild
              >
                <a href="https://lilnouns.wtf" target="_blank" rel="noopener noreferrer">
                  <div className="text-left">
                    <div className="font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                      lilnouns.wtf <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Official Lil Nouns DAO website and governance portal
                    </div>
                  </div>
                </a>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4 dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-600 bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="text-left">
                    <div className="font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                      Proposal Guidelines <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Official guidelines for proposal submission
                    </div>
                  </div>
                </a>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4 dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-600 bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="text-left">
                    <div className="font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                      Governance Forum <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Discuss proposals with the community</div>
                  </div>
                </a>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4 dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-600 bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="text-left">
                    <div className="font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                      Treasury Dashboard <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      View current treasury status and candidate fees
                    </div>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <Card className="lil-nouns-pink text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">You've Completed the Journey!</h3>
            <p className="mb-6 text-white">
              You've gone through all six phases of the proposer funnel. You're now ready to submit your proposal to Lil
              NounsDAO. Remember, the community is here to support you throughout the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://lilnouns.wtf" target="_blank" rel="noopener noreferrer">
                  Go to lilnouns.wtf <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 dark:hover:bg-zinc-900 dark:hover:text-white bg-transparent"
                asChild
              >
                <Link href="/">Start Another Proposal</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
