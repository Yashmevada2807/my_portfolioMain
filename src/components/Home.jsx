import { Link } from "react-router-dom";
import React from 'react'

const Home = () => {
    return (
        <div className="main   w-full justify-center items-center md:flex  py-2 shadow-lg h-[530px]">
            <div className="info  md:w-[50%] md:shrink-0 h-auto flex flex-col justify-center items-center text-center md:px-15 py-6 md:py-18 ">
                <div className="block  h-auto  py-9">
                    <div className="intro text-4xl md:text-5xl px-10  py-5 text-center  ">
                        Hello,I'm Yash, frontEnd Developer based in US.
                    </div>
                    <div className="about  text-sm md:py-2 px-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium similique aliquid magni aperiam est, quo aut animi officiis excepturi.
                    </div>
                </div>
                <div className="flex  justify-center gap-8 pt-5 ">

                    <Link className=' bg-gray-400 rounded-md shadow-2xs font-mono text-center px-2 hover:text-white hover:text-md hover:scale-[110%] hover:bg-gray-600  duration-300' to='/MyProject'>Button1</Link>
                    <Link className=' bg-gray-400 rounded-md shadow-2xs font-mono text-center px-2 hover:text-white hover:text-md hover:scale-[110%] hover:bg-gray-600 duration-300' to='/AboutMe'>Button2</Link>

                </div>
            </div>
            <div className="img md:w-[50%] h-auto flex justify-center">
                <Link className="w-fit h-auto rounded-br-4xl rounded-tl-4xl overflow-hidden cursor-pointer hover:shadow-2xl shadow-amber-300/100 hover:scale-[105%] duration-1000 " to="/AboutMe">
                    <img className="w-[290px] h-[300px] md:w-[350px] md:h-[350px]" src="src\assets\MyPicForGitHubProfile.jpg" alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Home
