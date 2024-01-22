import React from 'react'
import {ResponsiveContainer,AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip} from "recharts"

const AreaChartComponent = ({reportData}) => {

  return <ResponsiveContainer width="90%" height={300}>
    <AreaChart data={reportData} margin={{top:50}} >
      <CartesianGrid strokeDasharray='3 3'/>
      <XAxis dataKey='name'/>
      <YAxis allowDecimals={false}/>
      <Tooltip/>
      <Area type="monotone" dataKey="population" stroke="#1f4670" fill="#1f4670b3"/>
    </AreaChart>
  </ResponsiveContainer>
}

export default AreaChartComponent