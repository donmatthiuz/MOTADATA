"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useEffect, useState } from "react"

type DataPoint = {
  dia: string
  clorofila: number
}

export default function ChlorophyllPredictionChart() {
  const [data, setData] = useState<DataPoint[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/predicciones_2026_clorofila.csv")
      const text = await res.text()
      const lines = text.trim().split("\n").slice(1)

      const parsed = lines.map(line => {
        const [dia, clorofila] = line.split(",")
        return { dia, clorofila: parseFloat(clorofila) }
      })

      setData(parsed)
    }

    fetchData()
  }, [])

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dia" tick={{ fontSize: 12 }} />
        <YAxis domain={["auto", "auto"]} tick={{ fontSize: 12 }} />
        <Tooltip />
        <Line type="monotone" dataKey="clorofila" stroke="#14b8a6" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
