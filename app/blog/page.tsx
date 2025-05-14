import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

export const metadata = {
  title: "Blog - MOTADATA",
  description: "Latest news and updates about our river contamination prediction project",
}

export default function BlogPage() {
  return (
    <div className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Latest news, research findings, and updates about our work
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="relative h-[200px] w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post image"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>New Monitoring Station Deployed in Eastern Motagua</CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarIcon className="mr-1 h-3 w-3" /> May 10, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We've expanded our monitoring network with a new station in the eastern region of the Motagua River
                  basin, increasing our coverage and prediction accuracy.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/blog/new-monitoring-station">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative h-[200px] w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post image"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>AI Model Update Improves Prediction Accuracy by 15%</CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarIcon className="mr-1 h-3 w-3" /> April 28, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our data science team has implemented significant improvements to our AI prediction model, resulting
                  in a 15% increase in accuracy for contamination forecasts.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/blog/ai-model-update">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative h-[200px] w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post image"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Community Workshop: Understanding Water Quality Data</CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarIcon className="mr-1 h-3 w-3" /> April 15, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We recently held a workshop for community leaders to help them understand and use our water quality
                  data for local decision-making and environmental advocacy.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/blog/community-workshop">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative h-[200px] w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post image"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Research Partnership with Universidad de San Carlos</CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarIcon className="mr-1 h-3 w-3" /> March 30, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We're excited to announce a new research partnership with Universidad de San Carlos to study the
                  long-term effects of contamination on river ecosystems.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/blog/research-partnership">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative h-[200px] w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post image"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Early Warning System Prevents Major Contamination Event</CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarIcon className="mr-1 h-3 w-3" /> March 12, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our early warning system successfully predicted a potential contamination event, allowing authorities
                  to take preventive action and avoid a major environmental incident.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/blog/early-warning-success">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative h-[200px] w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post image"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Annual Report: State of the Motagua River 2024</CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarIcon className="mr-1 h-3 w-3" /> February 28, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our comprehensive annual report on the state of the Motagua River is now available, featuring data
                  analysis, trends, and recommendations for policy makers.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/blog/annual-report-2024">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
