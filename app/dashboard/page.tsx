import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Dashboard - MOTADATA",
  description: "View our river contamination prediction dashboard",
}

export default function DashboardPage() {
  return (
    <div className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Prediction Dashboard</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Visualize and analyze contamination data from the Motagua River basin
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="predictions">Predictions</TabsTrigger>
              <TabsTrigger value="historical">Historical Data</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Current Risk Level</CardTitle>
                    <div className="h-4 w-4 rounded-full bg-amber-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Moderate</div>
                    <p className="text-xs text-muted-foreground">Updated 3 hours ago</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monitoring Stations</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">All stations operational</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Contamination Events</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Last 30 days</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87%</div>
                    <p className="text-xs text-muted-foreground">+5.1% from last month</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Contamination Levels</CardTitle>
                    <CardDescription>Measured pollutant levels over the past 30 days</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="relative h-[300px] w-full">
                      <Image
                        src="/placeholder.svg?height=300&width=600"
                        alt="Contamination levels chart"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Pollutant Distribution</CardTitle>
                    <CardDescription>Types of contaminants detected</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-[300px] w-full">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Pollutant distribution chart"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="predictions">
              <Card>
                <CardHeader>
                  <CardTitle>Contamination Predictions</CardTitle>
                  <CardDescription>Forecasted contamination levels for the next 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[400px] w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Contamination predictions chart"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="historical">
              <Card>
                <CardHeader>
                  <CardTitle>Historical Data</CardTitle>
                  <CardDescription>Contamination trends over the past 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[400px] w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Historical contamination data"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
