"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { threatsChartData } from '@/lib/mock-data';

export default function ThreatsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={threatsChartData}>
        <XAxis
          dataKey="name"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
            contentStyle={{ 
                background: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
            }}
        />
        <Legend wrapperStyle={{fontSize: "0.8rem"}}/>
        <Bar dataKey="phishing" fill="hsl(var(--chart-1))" name="Phishing" radius={[4, 4, 0, 0]} />
        <Bar dataKey="malware" fill="hsl(var(--chart-2))" name="Malware" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
