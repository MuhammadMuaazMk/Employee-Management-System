import React, { useState } from "react";
import { setLocalStoarge } from "../../utils/localStoarge";

const Header = (props) => {
  // const [username, setUsername] = useState("")
  // if(!data){
  //   setUsername("Admin")

  // }
  // else{
  //   setUsername(data.firstName)
  // }
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    //window.location.reload()
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-5xl font-medium font-playfair">
        Hello  <span className="text-5xl  font-playfair">Username👋</span>{" "}
      </h1>
      
      <button onClick={logOutUser} className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-white px-6 py-3 font-extralight transition-all hover:bg-white">
    <span class="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out font-poppins text-xl group-hover:text-white">Log out</span>
</button>
    </div>
  );
};

export default Header;
