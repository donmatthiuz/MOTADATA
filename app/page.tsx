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
                  Prediccion del nivel de clorofila en la cuenca alta del Rio Motagua
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Nuestro sistema predice el comportamiento de la clorofia en la cuenca alta del rio Motagua, detectando fuentes de eutroficacion y quimicos que maten la vida en el rio
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href="/about">
                      Ver mas <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard">Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/rio-motagua1-768x425.jpg"
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
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">El problema</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contaminacion del rio Motagua</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                La cuenca alta del rio Motagua es contaminada por quimicos que afectan la diversidad de vida que se encuentra. Por ende los niveles de clorofila suelen bajar
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-2 bg-red-100 rounded-full">
                  <Droplets className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">La calidad del agua</h3>
                <p className="text-center text-muted-foreground">
                 Una poca diversidad en los rios se traduce como presencia de agentes quimicos que pueden ser perjudiciales para la salud humana
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-2 bg-amber-100 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Supuestos</h3>
                <p className="text-center text-muted-foreground">
                  La falta de recursos puede llevar a que la planeación de medidas ecológicas sufra de cierto retraso en la toma de decisiones de las autoridades gubernamentales.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-2 bg-blue-100 rounded-full">
                  <BarChart2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Posibles usuarios:</h3>
                <p className="text-center text-muted-foreground">
                  Personas que viven cerca de los ríos afectados.
Gobiernos locales
Personas y/o ONGs interesadas en formar programas de manejo adecuado de desechos y/o creación de material educativo referente a la contaminación.

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
               Une tus fuerzas para poder combatir la contaminacion del Rio Motagua
              </h2>
              <p className="max-w-[700px] md:text-xl">
               Si eres una ONG, un gobierno o un civil que nos quiere apoyar para llevar a cabo el proyecto
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-teal-600 hover:bg-gray-100" asChild>
                  <Link href="/contact">Contactanos</Link>
                </Button>
                {/* <Button variant="outline" className="border-white text-white hover:bg-teal-700" asChild>
                  <Link href="/blog">Read Our Blog</Link>
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
