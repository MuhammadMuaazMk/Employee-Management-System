import React,{ useState } from "react"


const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler  = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
        

    }
  return (
    <div className='flex h-screen w-screen items-center  justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(e)=>{
            submitHandler(e)

        }} action="" className='flex flex-col items-center justify-center'>
            <input
             value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
                
            }} required className=' font-poppins outline-none  bg-transparent border-2 border-emerald-600 rounded-full py-2 px-6 text-xl font-light placeholder:text-gray-300 ' type="email" placeholder='Enter Your email' />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
                
            }} required className=' font-poppins text-xl outline-none  bg-transparent border-2 font-light  border-emerald-600 rounded-full py-2 px-6  placeholder:text-gray-300 mt-3' type="password" placeholder='Enter  Password' />
            <button className='mt-7 text-white outline-none  font-poppins  bg-emerald-600 hover:bg-emerald-700 font-light rounded-full py-3 px-8 w-full text-lg  border-none'>Log in</button>

        </form>
      </div>
    </div>
  )
}

export default Login
