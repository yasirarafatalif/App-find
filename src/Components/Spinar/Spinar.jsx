import React, { useState, useEffect } from "react";
import { ClipLoader, DotLoader, MoonLoader } from "react-spinners";
const Spinar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // 3 sec loading simulation
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      {loading ? (
        <DotLoader color="#6366F1" size={80} />
      ) : 
       ''}
    </div>
  );
};

export default Spinar;