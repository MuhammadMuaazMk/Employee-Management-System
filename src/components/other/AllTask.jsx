import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c]  p-5 mt-5 rounded h-auto ">
      <div className=" bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] mb-2 py-2 px-4 flex justify-between rounded font-playfair">
            <h2 className="text-3xl font-bold w-1/5 ">Employee Name</h2>
            <h3 className=" text-3xl font-bold w-1/5 ">New Task</h3>
            <h5 className=" text-3xl font-bold w-1/5 ">Active Task</h5>
            <h5 className=" text-3xl font-bold w-1/5 ">Completed Task</h5>
            <h5 className=" text-3xl font-bold w-1/5 ">Failed </h5>
          </div>
      

      <div className=" ">
      {userData.map((elem,idx) => {
        return (
          <div key={idx} className="border-2 border-emerald-300 mb-2 py-2 px-4 flex justify-between rounded  ">
            <h2 className="text-2xl pl-3 font-playfair font-extralight w-1/5 text-white">{elem.firstName}</h2>
            <h3 className="text-xl  pl-6 font-extralight font-poppins w-1/5 text-white">{elem.taskCounts.newTask}</h3>
            <h3 className="text-xl pl-6 font-extralight font-poppins w-1/5 text-white">{elem.taskCounts.active}</h3>
            <h5 className="text-xl pl-12 font-extralight font-poppins w-1/5 text-white">{elem.taskCounts.completed}</h5>
            <h5 className="text-xl pl-6 font-extralight font-poppins w-1/5 text-white">{elem.taskCounts.failed}</h5>
          </div>
        );
      })}
      </div>

      
    </div>
  );
};

export default AllTask;
