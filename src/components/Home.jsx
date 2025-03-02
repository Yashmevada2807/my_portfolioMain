import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="w-full overflow-hidden overflow-y-scroll">
      <div className="main w-full justify-center items-center sm:flex flex-col sm:flex-row py-2 border h-auto">
        {/* Info Section */}
        {/* Image Section */}
        <div className="img md:w-[50%] p-8 h-auto flex justify-center">
          <Link className="w-fit h-auto rounded-br-4xl rounded-tl-4xl overflow-hidden cursor-pointer hover:shadow-2xl shadow-amber-300/100 hover:scale-105 duration-1000" to="/AboutMe">
            <img className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto mx-auto rounded-lg" src="/MyPicForGitHubProfile.jpg" alt="Profile" />
          </Link>
        </div>
        <div className="info md:w-[50%] h-auto flex flex-col justify-center items-center text-center px-6 py-6 md:py-18">
          <div className="block h-auto py-6">
            <div className="intro text-3xl sm:text-4xl md:text-6xl px-6 md:px-10 py-5 text-center max-w-lg">
              Hello, I'm Yash, Front-End Developer based in the US.
            </div>
            <div className="about text-sm md:py-2 px-6 text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium similique aliquid magni aperiam est, quo aut animi officiis excepturi.
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-5 w-full">
            <Link className="bg-gray-400 w-full sm:w-auto px-4 py-2 rounded-md shadow font-mono text-center hover:text-white hover:scale-105 hover:bg-gray-600 duration-300" to="/MyProject">
              Button1
            </Link>
            <Link className="bg-gray-400 w-full sm:w-auto px-4 py-2 rounded-md shadow font-mono text-center hover:text-white hover:scale-105 hover:bg-gray-600 duration-300" to="/AboutMe">
              Button2
            </Link>
          </div>
        </div>

      </div>

      {/* Latest Projects Section */}
      <div className="border-t py-6 text-center">
        <h1 className="text-xl font-semibold text-gray-700">Latest Projects</h1>
      </div>
    </div>
  );
};

export default Home;
