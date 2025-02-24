import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

type Props = {
  data: { date: string; count: number }[];
};

const NewsOpenChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis 
      dataKey="date" 
      tick={{ fontSize: 14, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fill: '#222' }} 
    />
    <YAxis 
      tick={{ fontSize: 14, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fill: '#222' }} 
    />
    <Tooltip 
      contentStyle={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: 14, color: '#222' }} 
    />
    <Line 
      type="monotone" 
      dataKey="count" 
      stroke="#FFCF00" 
      strokeWidth={4} 
      label={{ fontSize: 12, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fill: '#222' }} 
    />
  </LineChart>
</ResponsiveContainer>
  );
};

export default NewsOpenChart;
