import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <>
      

      <div>
        <div className="perspective-1000 w-80 h-80 parent">
          <div className="card h-full rounded-[50px] bg-gradient-to-r from-teal-400 to-green-600 transition-all ease-in-out duration-500 transform-style-preserve-3d shadow-lg">
            <div className="glass absolute inset-2.5 rounded-[55px] border-t border-white bg-gradient-to-t from-white/40 to-white/80 transform translate-z-[25px] transition-all duration-500"></div>
            <div className="content px-8 pt-24 transform translate-z-[26px]">
              <span className="bg-red-600 px-3 py-1 rounded text-sm mb-8">
                {data.category}
              </span>
              <span className="block text-[#00894d] font-extrabold text-4xl font-playfair mt-2">
                {data.taskTitle}
              </span>
              <span className="block text-black text-base mt-2 mb-28">
                {data.taskDescription}
              </span>
              <a
                href="#_"
                className="relative px-3 py-2  font-extralight text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-400 ease"
              >
                <span className="absolute bottom-0 left-0 h-10 -ml-2">
                  <svg
                    viewBox="0 0 487 487"
                    className="w-10 h-10 opacity-100 object-stretch"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      fill="#FFF"
                      fill-rule="nonzero"
                      fill-opacity=".1"
                    ></path>
                  </svg>
                </span>
                <span className="absolute top-0 right-0 w-6 h-6 -mr-3">
                  <svg
                    viewBox="0 0 487 487"
                    className="object-cover w-1/2 h-1/2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      fill="#FFF"
                      fill-rule="nonzero"
                      fill-opacity=".1"
                    ></path>
                  </svg>
                </span>
                <span className=" relative text-2xl font-playfair  ">
                  Mark as Completed
                </span>
              </a>
              <a
                href="#_"
                className="relative px-3 py-2 ml-2 font-extralight text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-400 ease"
              >
                <span className="absolute bottom-0 left-0 h-10 -ml-2">
                  <svg
                    viewBox="0 0 487 487"
                    className="w-10 h-10 opacity-100 object-stretch"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      fill="#FFF"
                      fill-rule="nonzero"
                      fill-opacity=".1"
                    ></path>
                  </svg>
                </span>
                <span className="absolute top-0 right-0 w-6 h-6 -mr-3">
                  <svg
                    viewBox="0 0 487 487"
                    className="object-cover w-1/2 h-1/2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      fill="#FFF"
                      fill-rule="nonzero"
                      fill-opacity=".1"
                    ></path>
                  </svg>
                </span>
                <span className="relative text-2xl font-playfair ">
                  Mark as Failed
                </span>
              </a>
            </div>
            <div className="bottom px-3 py-2.5 absolute bottom-5 left-5 right-5 flex items-center justify-between transform translate-z-[26px]">
              <div className="social-buttons-container flex gap-2.5 transform-style-preserve-3d">
                <button className="social-button w-7 h-7 p-1.5 bg-white rounded-full shadow-md transition-transform ease-in-out delay-[400ms]">
                  <svg
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-teal-600"
                  ></svg>
                </button>
                <button className="social-button w-7 h-7 p-1.5 bg-white rounded-full shadow-md transition-transform ease-in-out delay-[600ms]">
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-teal-600"
                  ></svg>
                </button>
                <button className="social-button w-7 h-7 p-1.5 bg-white rounded-full shadow-md transition-transform ease-in-out delay-[800ms]">
                  <svg
                    viewBox="0 0 640 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-teal-600"
                  ></svg>
                </button>
              </div>
              <div className="view-more flex items-center w-2/5 justify-end transition-all ease-in-out duration-200 hover:translate-z-[10px]">
                <button className="view-more-button bg-none border-none text-green-500 font-bold text-xs">
                  {data.taskDate}
                </button>
              </div>
            </div>
            <div className="logo absolute top-0 right-0 transform-style-preserve-3d">
              <span className="circle w-[170px] absolute aspect-ratio-1 rounded-full top-2 right-2 box-shadow-lg transform translate-z-[20px] bg-teal-300/20 transition-all ease-in-out duration-500"></span>
              <span className="circle w-[140px] absolute aspect-ratio-1 rounded-full top-2.5 right-2.5 box-shadow-md transform translate-z-[40px] bg-teal-300/20 transition-all ease-in-out duration-500 delay-500ms"></span>
              <span className="circle w-[110px] absolute aspect-ratio-1 rounded-full top-4 right-4 box-shadow-md transform translate-z-[60px] bg-teal-300/20 transition-all ease-in-out duration-500 delay-1000ms"></span>
              <span className="circle w-[80px] absolute aspect-ratio-1 rounded-full top-6 right-6 box-shadow-md transform translate-z-[80px] bg-teal-300/20 transition-all ease-in-out duration-500 delay-1500ms"></span>
              <span className="circle w-[50px] absolute aspect-ratio-1 rounded-full top-8 right-8 box-shadow-md transform translate-z-[100px] bg-teal-300/20 transition-all ease-in-out duration-500 delay-2000ms">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.667 31.69"
                  className="w-5 fill-white"
                ></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptTask;
