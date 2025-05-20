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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre el proyecto</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              El algoritmo que usamos es una red neuronal que predice el nivel de clorofila en base a  diferentes variables (hierro disuelto, fosfato, nitrato, carbono disuelto)
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Clorofila</h2>
              <p className="text-muted-foreground md:text-lg">
                La clorofila es un compuesto liberado por las plantas, se usaron datos de las misiones sentinel desde enero de 2021 hasta enero 2025. Siendo observaciones diarias
              </p>
             
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image src="/predict.png" alt="MOTADATA team" fill className="object-cover" />
            </div>
          </div>
          
          <br/>
           <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image src="/fosforo_2026.png" alt="MOTADATA team" fill className="object-cover" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Variables</h2>
              <p className="text-muted-foreground md:text-lg">
                En base a esto se realizo un modelo para predecir como aumentarian o disminuirian las variables que predicen el comportamiento de la clorofila siendo (hierro disuelto, fosfato, nitrato, carbono disuelto), esto para el año 2026 usando un random forest.
              </p>
             
            </div>
        
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Modelo</h2>
              <p className="text-muted-foreground md:text-lg">
                Con los datos que obtuvimos del año 2021 al 2025, realizamos una red neuronal para predecir el comportamiento de la clorofila. Obtuvimos un error MSE de 0.0003, lo cual, en el mundo de las IAs, equivale a decir que tuvimos una precisión altísima, prácticamente un ajuste perfecto del modelo.
              </p>
             
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image src="/motadata.png" alt="MOTADATA team" fill className="object-cover" />
            </div>
          </div>
<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image src="/clorofila_final.png" alt="MOTADATA team" fill className="object-cover" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Prediccion</h2>
              <p className="text-muted-foreground md:text-lg">
              Al final, se predijo con este modelo que los niveles de clorofila subirían, lo cual significa un posible incremento en la productividad biológica del área analizada, aunque se ve que el aumento es bastante mayor lo cual puede deberse al fenomeno de eutroficacion que es un proceso ecológico en el que un cuerpo de agua (como un lago, río o zona costera) recibe un exceso de nutrientes, especialmente nitrógeno y fósforo, lo cual complementado con lo visto anteriormente con el fosforo es lo que esta ocurriendo.
            </p>

            </div>
        
          </div>

          
          
          <br/>
        </div>
      </section>

    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <h2 className="text-3xl font-bold tracking-tighter">Video Pitch</h2>
      <p className="max-w-2xl text-muted-foreground md:text-lg">
        Te presentamos nuestro proyecto en este breve video explicativo.
      </p>
      <div className="w-full max-w-3xl aspect-video">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/TBToM1BOylM"
          title="Video Pitch"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
</section>


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
    </div>
  )
}
