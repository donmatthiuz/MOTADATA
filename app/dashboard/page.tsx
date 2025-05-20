import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ChlorophyllPredictionChart from "@/components/ChlorophyllPredictionChart"


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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Dashboard del Modelo</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Visualiza los niveles de clorofila predichos por el modelo
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="predictions" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
                            <TabsTrigger value="predictions">Predicciones</TabsTrigger>
              <TabsTrigger value="overview">Metricas Modelo</TabsTrigger>

              <TabsTrigger value="historical">Datos Historicos</TabsTrigger>
            </TabsList>
           
            <TabsContent value="predictions">
              <Card>
                <CardHeader>
                  <CardTitle>Predicciones de Contaminacion</CardTitle>
                  <CardDescription>Predicciones dadas por el modelo del nivel de clorofila para el proximo año 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[400px] w-full">
                  <ChlorophyllPredictionChart />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
             <TabsContent value="overview">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Nivel de Riesgo del Modelo</CardTitle>
                    <div className="h-4 w-4 rounded-full bg-amber-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Bajo</div>
          
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Area que se monitorea</CardTitle>
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
                    <div className="grid grid-cols-2 gap-4 p-4 bg-white shadow rounded-lg">
  <div className="text-center">
    <p className="text-sm text-muted-foreground">Norte</p>
    <p className="text-xl font-semibold text-teal-700">15.69</p>
  </div>
  <div className="text-center">
    <p className="text-sm text-muted-foreground">Sur</p>
    <p className="text-xl font-semibold text-teal-700">15.69</p>
  </div>
  <div className="text-center">
    <p className="text-sm text-muted-foreground">Este</p>
    <p className="text-xl font-semibold text-teal-700">-88.40</p>
  </div>
  <div className="text-center">
    <p className="text-sm text-muted-foreground">Oeste</p>
    <p className="text-xl font-semibold text-teal-700">-88.40</p>
  </div>
</div>

                    
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Metrica MSE de regresion</CardTitle>
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
                      <path d="M3 3v18h18M9 17V9m4 8v-4m4 4V5" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0.0003</div>
                    <p className="text-xs text-muted-foreground">Esto sobre el conjunto de prueba de 10% osea 115 registros</p>
                  </CardContent>
                </Card>
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Metrica MAE de regresion</CardTitle>
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
                      <path d="M3 3v18h18M9 17V9m4 8v-4m4 4V5" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0.0115</div>
                    <p className="text-xs text-muted-foreground">Esto sobre el conjunto de prueba de 10% osea 115 registros</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
               
          
              </div>
            </TabsContent>
            <TabsContent value="historical">
              <Card>
                <CardHeader>
                  <CardTitle>Datos historicos y Futuros</CardTitle>
                  <CardDescription>Datos historicos del nivel de clorofila en los ultimos 4 años y predichos para el año 2026 marcado con verde</CardDescription>
                </CardHeader>
                <CardContent>
                 <div className="relative h-[400px] w-full">
  <Image
    src="/clorofila_final.png"
    alt="Historical contamination data"
    fill
    className="object-contain"
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
