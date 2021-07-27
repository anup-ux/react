import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Chart({datac}) {
    const data = datac.data;
    return (
        <div className="chart">
  <LineChart width={800} height={500} data={data}>
    <Line type="monotone" dataKey="result" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="weight" />
    <YAxis />
  </LineChart>

        </div>
    )
}

export default Chart
