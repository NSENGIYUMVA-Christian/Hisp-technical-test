import React from 'react'
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip} from "recharts"


const BarChartComponent = ({reportData}) => {
  return <ResponsiveContainer width="90%" height={300}>
    <BarChart data={reportData} margin={{top:50}} >
      <CartesianGrid strokeDasharray='10 10'/>
      <XAxis dataKey='name'/>
      <YAxis allowDecimals={false}/>
      <Tooltip/>
      <Bar  dataKey="population" stroke="#1f4670" fill="#1f4670b3" barSize={75} />
    </BarChart>
  </ResponsiveContainer>

}

export default BarChartComponent