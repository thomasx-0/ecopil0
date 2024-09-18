"use client"

import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface DataPoint {
  timestamp: string
  value: number
}

export default function CarbonFootprintChart() {
  const [data, setData] = useState<DataPoint[]>([])

  useEffect(() => {
    fetch('src/app/api/carbon-footprint.ts')
      .then(response => response.json())
      .then(setData)
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  const chartData = {
    labels: data.map(point => new Date(point.timestamp).toLocaleString()),
    datasets: [
      {
        label: 'Carbon Footprint',
        data: data.map(point => point.value),
        fill: false,
        backgroundColor: 'rgb(0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0.2)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Carbon Footprint Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Carbon Footprint',
        },
      },
    },
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 dark:text-white dark:bg-zinc-900 text-black bg-white rounded-lg shadow-md">
      <Line data={chartData} options={options} />
    </div>
  )
}