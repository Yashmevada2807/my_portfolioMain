import { Link } from "react-router-dom";
import React from 'react'
import ProjectCard from "./ProjectCard";

const Home = () => {
    return (
        <div className=" w-full overflow-hidden ">
            <div className="main w-full  border-zinc-500 justify-center items-center sm:flex flex-col sm:flex-row py-2  h-auto">
                <div className="info  md:w-[50%] h-auto flex flex-col justify-center items-center text-center px-5 md:px-8  py-6 md:py-10 ">
                    <div className="block  h-full w-auto md:px-2 py-4">
                        <div className="intro font-bold text-3xl sm:text-4xl md:text-5xl px-6 md:px-10  py-5 text-center max-w-lg ">
                            Hello,I'm Yash, frontEnd Developer based in USA.
                        </div>
                        <div className="about text-sm md:py-2 text-center px-6 text-gray-600 max-w-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit enim quas, quis dolores iure blanditiis delectus nostrum fuga sed unde ipsa consequatur dolorum dolore!
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row text-center w-full sm:w-auto gap-8 pt-5 ">

                        <Link className=' bg-gray-400 rounded-md flex items-center justify-center shadow-2xs font-mono text-center px-4 py-2 sm:w-auto hover:text-white hover:scale-105 sm:hover:scale-110 hover:bg-gray-600  duration-300' to='/myprojects'>See all projects</Link>

                    </div>
                </div>
                <div className="img md:w-[50%] p-8 h-auto flex justify-center">
                    <Link className="w-fit h-auto rounded-br-2xl rounded-tl-2xl hover:rounded-br-4xl hover:rounded-tl-4xl overflow-hidden cursor-pointer hover:shadow-2xl shadow-amber-300/100 hover:scale-[105%] duration-1000 " to="/AboutMe">
                        <img className=" w-full h-auto max-w-xs sm:max-w-sm md:max-w-md" src="\MyPicForGitHubProfile.jpg" alt="" />
                    </Link>
                </div>
            </div>
            <div className=" flex border-b-[1px] border-t-[1px] border-neutral-300 justify-center items-center font-bold text-2xl p-2">
                <h1>Latest Project's</h1>
            </div>
            <div className=' w-auto px-15  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center py-6 shadow-2xl'>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default Home