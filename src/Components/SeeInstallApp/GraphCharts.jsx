import React from 'react';
  import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const GraphCharts = ({ratings}) => {
    // console.log(ratings);
    return (
        <div className="bg-white shadow-md rounded-2xl p-4 w-full h-96">
      {/* <h2 className="text-center text-xl font-semibold mb-4">
        Rating Distribution
      </h2> */}

      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratings}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ backgroundColor: '#f9f9f9' }} />
          <Legend />
          
          <Bar dataKey="count" fill="#8884d8" barSize={40} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
};

export default GraphCharts;