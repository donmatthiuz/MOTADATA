import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, Droplets, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Predicting River Contamination in the Lower Motagua Basin
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our advanced AI system monitors and predicts contamination levels in the Motagua River, helping
                  protect ecosystems and communities that depend on this vital water source.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href="/about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard">View Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Motagua River"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">The Problem</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">River Contamination Crisis</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                The lower Motagua River basin faces severe contamination challenges from industrial waste, agricultural
                runoff, and urban pollution. This threatens local ecosystems, public health, and the livelihoods of
                communities that depend on the river.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-2 bg-red-100 rounded-full">
                  <Droplets className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Water Quality Decline</h3>
                <p className="text-center text-muted-foreground">
                  Dangerous levels of pollutants affecting drinking water and aquatic life
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-2 bg-amber-100 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Ecosystem Damage</h3>
                <p className="text-center text-muted-foreground">
                  Biodiversity loss and habitat destruction in and around the river
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-2 bg-blue-100 rounded-full">
                  <BarChart2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Unpredictable Changes</h3>
                <p className="text-center text-muted-foreground">
                  Lack of early warning systems for contamination spikes and events
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Join Our Effort to Protect the Motagua River
              </h2>
              <p className="max-w-[700px] md:text-xl">
                Whether you're a government agency, environmental organization, or concerned citizen, our prediction
                system can help you make a difference.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-teal-600 hover:bg-gray-100" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-teal-700" asChild>
                  <Link href="/blog">Read Our Blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
