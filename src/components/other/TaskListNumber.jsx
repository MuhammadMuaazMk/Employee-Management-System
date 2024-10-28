import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className=' rounded-xl py-6 px-9 w-[40%] shadow-2xl shadow-teal-300 bg-slate-500'>
        <h2 className='text-3xl font-semibold font-poppins'>{data.taskCounts.active}</h2>
        <h3 className='text-3xl font-medium font-playfair'>Accepted Task</h3>
      </div>
      <div className='  py-6 px-9 w-[40%] bg-green-400 shadow-2xl shadow-teal-100 rounded-xl'>
        <h2 className='text-3xl font-semibold font-poppins'>{data.taskCounts.newTask}</h2>
        <h3 className='text-3xl font-medium font-playfair'>New Task</h3>
      </div>
      <div className=' rounded-xl py-6 px-9 w-[40%] bg-yellow-400 shadow-2xl shadow-teal-300 '>
        <h2 className='text-3xl font-semibold font-poppins'>{data.taskCounts.completed}</h2>
        <h3 className='text-3xl font-medium  font-playfair'>Completed Task</h3>
      </div>
     
      <div className=' rounded-xl py-6 px-9 w-[40%] bg-red-400  shadow-2xl shadow-teal-100'>
        <h2 className='text-3xl font-semibold font-poppins'>{data.taskCounts.failed}</h2>
        <h3 className='text-3xl font-medium font-playfair'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
