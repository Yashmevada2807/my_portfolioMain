import React from 'react'

const Home = () => {
  return (
    <div className="main  border w-auto flex py-2 shadow-2xl h-[530px]">
        <div className="info w-[50%] h-full flex flex-col justify-center items-center text-center  py-18 ">
          <div className="block  h-[350px] ">
            <div className="intro text-5xl px-10  py-5 text-center  ">
              Hello,I'm Yash, frontEnd Developer based in US.
            </div>
            <div className="about text-sm py-4 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium similique aliquid magni aperiam est, quo aut animi officiis excepturi.
            </div>
          </div>
          <div className="flex justify-center gap-10 py-7 ">
            <button className='border rounded-md shadow-2xs font-mono text-center px-2 hover:scale-[110%] duration-300'>button1</button>
            <button className='border rounded-md shadow-2xs font-mono text-center px-2 hover:scale-[110%] duration-300'>button2</button>
          </div>
        </div>
        <div className="img w-[50%] border h-full ">
          image side
        </div>
      </div>
  )
}

export default Home
