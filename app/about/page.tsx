import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About - MOTADATA",
  description: "Learn about our mission to predict and prevent river contamination in the Motagua basin",
}

export default function AboutPage() {
  return (
    <div className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About MOTADATA</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our mission is to protect the Motagua River through advanced prediction technology
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground md:text-lg">
                MOTADATA was founded in 2023 by a team of environmental scientists, data analysts, and local community
                leaders concerned about the increasing contamination in the lower Motagua River basin.
              </p>
              <p className="text-muted-foreground md:text-lg">
                After witnessing the devastating effects of pollution on local ecosystems and communities, we set out to
                create a solution that could predict contamination events before they became critical, allowing for
                preventive action.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Today, our AI-powered prediction system helps protect one of Guatemala's most important water resources
                and the communities that depend on it.
              </p>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="MOTADATA team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We are committed to protecting water resources through technology, education, and community engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold">Predict</h3>
              <p className="text-center text-muted-foreground">
                Develop and deploy advanced AI models to predict contamination events with high accuracy
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold">Protect</h3>
              <p className="text-center text-muted-foreground">
                Enable timely interventions to protect ecosystems and communities from harmful pollution
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold">Preserve</h3>
              <p className="text-center text-muted-foreground">
                Work with stakeholders to develop long-term solutions for river conservation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Join Our Mission</h2>
            <p className="max-w-[700px] md:text-xl">
              Whether you're a scientist, developer, or concerned citizen, there are many ways to contribute to our
              work.
            </p>
            <Button className="bg-white text-teal-600 hover:bg-gray-100" asChild>
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
