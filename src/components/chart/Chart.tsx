import { Line, LineChart, Tooltip, XAxis } from 'recharts'

import './paddingChart.scss'
import { FC } from 'react'

const Charts: FC<{
  data: {
    uv: string
    name: string
  }[]
}> = ({ data }) => {
  return (
    <>
      <LineChart width={810} height={110} data={data} className=" mt-5 ">
        <Line type="monotone" dataKey="uv" stroke="#8884d8" name=" " unit={'°C'} />
        <XAxis dataKey="name" tick={{ stroke: 'white' }} />
        <Tooltip
          contentStyle={{ backgroundColor: 'transparent', color: 'red', border: 'none' }}
          labelStyle={{ display: 'none' }}
          separator="+"
        />
      </LineChart>
    </>
  )
}

export default Charts
