
import React from "react";
import { Area, AreaChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip } from "recharts";
import { useState, useEffect } from "react";
import './chartsDashbord.css'
let statecartsfetchValue = null


const data = [
  {
    "name": "month 1",
    "sel": 3000,
    "buy": 2400,
    "amt": 2400
  },
  {
    "name": "month 2",
    "sel": 3000,
    "buy": 1398,
    "amt": 2210
  },
  {
    "name": "month 3",
    "sel": 2000,
    "buy": 9800,
    "amt": 2290
  },
  {
    "name": "month 4",
    "sel": 2780,
    "buy": 3908,
    "amt": 2000
  },
  {
    "name": "month 5",
    "sel": 1890,
    "buy": 4800,
    "amt": 2181
  },
  {
    "name": "month 6",
    "sel": 2390,
    "buy": 3800,
    "amt": 2500
  },
  {
    "name": "month 7",
    "sel": 3490,
    "buy": 4300,
    "amt": 2100
  }
]



function ChartsDashboard() {

  const [chartInfo, setchartInfo] = useState(data)

  useEffect(() => {
    async function fetching1() {
      await fetch('https://cmscms-a-default-rtdb.firebaseio.com/chartInfo.json')
        .then(res => res.json())
        .then(res => {
          console.log(res)
          statecartsfetchValue = Object.entries(res)[0]
        })
      console.log(statecartsfetchValue)
    }
    fetching1()
  }, [])

  useEffect(() => {
    fetch('https://cmscms-a-default-rtdb.firebaseio.com/chartInfo.json')
      .then(res => res.json())
      .then(res => {
        console.log(statecartsfetchValue[1])
        setchartInfo(statecartsfetchValue[1])
      })
  }, [data])

  const widthchartfunc = () => {
    const [widthchart, setwidthchart] = useState(window.innerWidth - 247 - 32)
    console.log(widthchart)
    return widthchart
  }

  // window.addEventListener('resize', () => {
  //   widthchartfunc()
  // })


  return (

    <div className="mt-3 pb-2  parent-chart">
      <AreaChart width={widthchartfunc()} className="w-100" height={250} data={chartInfo}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorsel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorbuy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="sel" stroke="#8884d8" fillOpacity={1} fill="url(#colorsel)" />
        <Area type="monotone" dataKey="buy" stroke="#82ca9d" fillOpacity={1} fill="url(#colorbuy)" />
      </AreaChart>
    </div>


  )
}



export default ChartsDashboard;

// ChartsDashboard.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';

