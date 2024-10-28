import React, {useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider';
const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescripition] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asginTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask , setNewTask] = useState({})
  const submitHandler=(e)=>{
    e.preventDefault()
    setNewTask({taskTitle,taskDescription,taskDate,category, active:false,newTask:true,failed:false,completed:false})
    const data =userData

    data.forEach((elem)=>{
      if(asginTo==elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCounts.newTask=elem.taskCounts.newTask+1
       
        
      }
    })

    setUserData(data)
    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescripition('')

  }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded font-playfair ">
        <form onSubmit={(e)=>{submitHandler(e)}} action="" className="flex flex-wrap w-full  items-start justify-between">
            <div className="w-1/2">
          <div>
            <h3 className="text-2xl text-gray-300 mb-0.5">Task Title</h3>
            <input value={taskTitle}  
             onChange={(e)=>{setTaskTitle(e.target.value)}} className="text-sm font-poppins py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI Desgin" />
          </div>
          

          <div>
            <h3 className="text-2xl text-gray-300 mb-0.5">Date</h3>
            <input value={taskDate}  
             onChange={(e)=>{setTaskDate(e.target.value)}} className="text-sm py-1 font-poppins px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" name="" id="" />
          </div>

          <div>
            <h3 className="text-2xl text-gray-300 mb-0.5">Assgin to</h3>
          <input value={asginTo}  
             onChange={(e)=>{setAsignTo(e.target.value)}} className="text-sm py-1 font-poppins px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee Name" />
          </div>
          <div>
          <h3 className="text-2xl text-gray-300 mb-0.5">Category</h3>
          <input value={category}  
             onChange={(e)=>{setCategory(e.target.value)}} className="text-sm py-1 font-poppins px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Desgin , Dev , Etc" />
          </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl text-gray-300 mb-0.5">Description</h3>
            <textarea value={taskDescription}  
             onChange={(e)=>{setTaskDescripition(e.target.value)}} className=" w-full h-44 text-sm py-2 px-4 font-poppins  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" name="" id="" cols="30" rows="10"></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 font-playfair rounded text-2xl mt-4 w-full">Create Task</button>
          </div>
          
        </form>
      </div>
  )
}

export default CreateTask
