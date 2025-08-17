"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle, Info } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const questions = [
  {
    id: 1,
    question: "Have you researched previous NounsDAO proposals?",
    options: [
      { value: "extensively", label: "Yes, I've reviewed many proposals extensively", points: 3 },
      { value: "some", label: "I've looked at some proposals", points: 2 },
      { value: "few", label: "I've seen a few proposals", points: 1 },
      { value: "none", label: "No, I haven't researched any proposals yet", points: 0 },
    ],
  },
  {
    id: 2,
    question: "Do you own a Lil Noun, have a sponsor, or will you be submitting as a candidate?",
    options: [
      { value: "own", label: "I own a Lil Noun", points: 3 },
      { value: "sponsor", label: "I have a sponsor lined up", points: 3 },
      { value: "candidate", label: "I plan to submit as a candidate", points: 2 },
      { value: "unsure", label: "I'm not sure about this process", points: 0 },
    ],
    info: "Lil Noun owners can propose directly. Sponsors can propose on your behalf. Candidates pay a fee to have their proposal considered.",
  },
  {
    id: 3,
    question: "Is this proposal for a future project or retroactive funding?",
    options: [
      { value: "future", label: "Future project I plan to build", points: 2 },
      { value: "retro", label: "Retroactive funding for existing work", points: 2 },
      { value: "mixed", label: "Combination of both", points: 3 },
      { value: "unsure", label: "I'm not sure", points: 0 },
    ],
  },
  {
    id: 4,
    question: "Do you have the team to execute this proposal?",
    options: [
      { value: "complete", label: "Yes, I have a complete team ready", points: 3 },
      { value: "partial", label: "I have some team members", points: 2 },
      { value: "solo", label: "I plan to work solo", points: 1 },
      { value: "need-help", label: "I need help finding collaborators", points: 0 },
    ],
  },
  {
    id: 5,
    question: "Do you have your budget established for this proposal?",
    options: [
      { value: "detailed", label: "Yes, I have a detailed budget breakdown", points: 3 },
      { value: "rough", label: "I have a rough budget estimate", points: 2 },
      { value: "range", label: "I have a general range in mind", points: 1 },
      { value: "no-budget", label: "I haven't thought about budget yet", points: 0 },
    ],
  },
  {
    id: 6,
    question: "Have you received feedback from Lil Nouniverse community members?",
    options: [
      { value: "extensive", label: "Yes, extensive feedback from multiple sources", points: 3 },
      { value: "some", label: "Some feedback from community members", points: 2 },
      { value: "informal", label: "Informal discussions only", points: 1 },
      { value: "none", label: "No community feedback yet", points: 0 },
    ],
  },
  {
    id: 7,
    question: "Would you like assistance through the proposal process?",
    options: [
      { value: "guided", label: "Yes, I'd like guided assistance", points: 0 },
      { value: "resources", label: "Just provide me with resources", points: 1 },
      { value: "independent", label: "I prefer to work independently", points: 2 },
    ],
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const totalQuestions = questions.length
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const calculateScore = () => {
    let totalScore = 0
    questions.forEach((question) => {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find((opt) => opt.value === answer)
        if (option) {
          totalScore += option.points
        }
      }
    })
    return totalScore
  }

  const getRecommendation = (score: number) => {
    const maxScore = questions.reduce((sum, q) => sum + Math.max(...q.options.map((o) => o.points)), 0)
    const percentage = (score / maxScore) * 100

    if (percentage >= 80) {
      return {
        level: "Ready to Propose",
        color: "bg-green-500",
        icon: <CheckCircle className="w-5 h-5" />,
        message:
          "You're well-prepared to submit a proposal! Consider moving to the research phase to refine your approach.",
        nextStep: "/research",
      }
    } else if (percentage >= 60) {
      return {
        level: "Almost Ready",
        color: "bg-yellow-500",
        icon: <AlertCircle className="w-5 h-5" />,
        message:
          "You're on the right track but could benefit from more preparation. Focus on the areas where you scored lower.",
        nextStep: "/research",
      }
    } else {
      return {
        level: "Needs Preparation",
        color: "bg-red-500",
        icon: <Info className="w-5 h-5" />,
        message:
          "Take some time to research and prepare before proposing. We recommend starting with the research phase.",
        nextStep: "/research",
      }
    }
  }

  if (showResults) {
    const score = calculateScore()
    const recommendation = getRecommendation(score)

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 ${recommendation.color} rounded-full flex items-center justify-center text-white`}
                >
                  {recommendation.icon}
                </div>
              </div>
              <CardTitle className="text-2xl dark:text-white">Quiz Complete!</CardTitle>
              <CardDescription>Here's your readiness assessment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {recommendation.level}
                </Badge>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{recommendation.message}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold dark:text-white">Your Responses Summary:</h3>
                {questions.map((question) => {
                  const answer = answers[question.id]
                  const option = question.options.find((opt) => opt.value === answer)
                  return (
                    <div key={question.id} className="border-l-4 border-blue-200 pl-4">
                      <p className="font-medium text-sm dark:text-white">{question.question}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{option?.label}</p>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1" asChild>
                  <Link href={recommendation.nextStep}>
                    Continue Your Journey <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowResults(false)
                    setCurrentQuestion(0)
                    setAnswers({})
                  }}
                >
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const currentAnswer = answers[currentQ.id]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold dark:text-white">Proposal Readiness Quiz</h1>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Badge variant="outline">
                {currentQuestion + 1} of {totalQuestions}
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl dark:text-white">{currentQ.question}</CardTitle>
            {currentQ.info && (
              <CardDescription className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-200">
                <Info className="w-4 h-4 inline mr-2" />
                {currentQ.info}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={currentAnswer || ""} onValueChange={(value) => handleAnswer(currentQ.id, value)}>
              {currentQ.options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 transition-colors"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button onClick={nextQuestion} disabled={!currentAnswer}>
                {currentQuestion === totalQuestions - 1 ? "See Results" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
