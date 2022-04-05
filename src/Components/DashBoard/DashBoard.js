import React from 'react';
import useChartData from '../../usehooks/useChartData';
import { Line, LineChart, Area, AreaChart, Bar, BarChart, Tooltip, XAxis, YAxis, Legend} from 'recharts';
const DashBoard = () => {
    const [data] = useChartData();
    return (
        <div className='grid md:grid-cols-2 justify-center items-center gap-5 md:w-[80%] mx-auto md:py-5'>
            <div className='shadow-lg border-2 md:rounded-2xl p-3'>
                <h1>Month VS Sell</h1>
                <LineChart width={400} height={300} data={data}>
                    <Line dataKey='month'></Line>
                    <Line dataKey='sell'></Line>
                    <Legend />
                    <Tooltip></Tooltip>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                </LineChart>
            </div>
            <div className='shadow-lg border-2 md:rounded-2xl p-3'>
                <h1>Investment VS Revenue</h1>
                <AreaChart width={400} height={300} data={data}>
                    <Area dataKey='investment'></Area>
                    <Area dataKey='revenue'></Area>
                    <Legend />
                    <Tooltip></Tooltip>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                </AreaChart>
            </div>
            <div className='shadow-lg border-2 md:odd:rounded-2xl p-3'>
                <h1>Investment VS Revenue</h1>
                <BarChart width={400} height={300} data={data}>
                    <Bar dataKey='investment' fill="#8884d8"></Bar>
                    <Bar dataKey='revenue' fill="#82ca9d"></Bar>
                    <Legend />
                    <Tooltip></Tooltip>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                </BarChart>
            </div>
            
        </div>
    );
};

export default DashBoard;