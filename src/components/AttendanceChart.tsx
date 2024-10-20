"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = () => {
  const data = [
    {
      name: "Sun",
      present: 40,
      absent: 20,
    },
    {
      name: "Mon",
      present: 200,
      absent: 30,
    },
    {
      name: "Tue",
      present: 400,
      absent: 0,
    },
    {
      name: "Wed",
      present: 4000,
      absent: 2400,
    },
    {
      name: "Thu",
      present: 4000,
      absent: 2400,
    },
    {
      name: "Fri",
      present: 4000,
      absent: 2400,
    },
    {
      name: "Sat",
      present: 4000,
      absent: 2400,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Attendance</h1>
        <Image src="/moreDark.png" alt="more..." width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d6db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d6db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px" , paddingBottom:"40px"}} />
          <Bar
            dataKey="absent"
            fill="#CFCEFF"
            legendType="circle"
            radius={[10,10,0,0]}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10,10,0,0]}


          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
