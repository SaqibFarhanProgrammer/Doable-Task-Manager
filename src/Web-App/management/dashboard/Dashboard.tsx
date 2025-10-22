import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type ChartData = {
  name: string
  users: number
  sales: number
}

const data: ChartData[] = [
  { name: "Jan", users: 4000, sales: 2400 },
  { name: "Feb", users: 3000, sales: 1398 },
  { name: "Mar", users: 2000, sales: 9800 },
  { name: "Apr", users: 2780, sales: 3908 },
  { name: "May", users: 1890, sales: 4800 },
  { name: "Jun", users: 2390, sales: 3800 },
  { name: "Jul", users: 3490, sales: 4300 },
]

const Dashboard: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-semibold mb-8">Dashboard Overview</h1>

      <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-xl mb-4 font-medium">User Growth & Sales</h2>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ background: "#111", border: "none", color: "#fff" }} />
              <Line type="monotone" dataKey="users" stroke="#4ade80" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="sales" stroke="#60a5fa" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
