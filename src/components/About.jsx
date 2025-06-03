import React from 'react'
import DarkBtn from './DarkBtn'

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 shadow-2xl py-2">
      <div className="border-b border-neutral-300 dark:border-zinc-600 flex justify-center items-center font-bold text-3xl p-2">
        <h1>About Me</h1>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4 text-start text-white text-base leading-relaxed">
        <p>
          Hey there! I’m a full-stack developer with a deep passion for creating digital experiences that are both functional and visually engaging. My journey started on the frontend—working with HTML, CSS, JavaScript, and React to build beautiful, responsive interfaces. Over time, I expanded into backend development with Node.js, Express.js, and MongoDB to bring complete, full-stack solutions to life.
        </p>

        <p>
          But I don’t stop at web development. I'm a curious learner actively diving into <strong>data science</strong>, which has become a major focus and passion of mine. I'm currently learning concepts like clustering algorithms, artificial neural networks, and real-world data applications—with the goal of building a future career in this exciting and impactful field.
        </p>

        <p>
          Alongside data science, I’m also exploring game development, blockchain, and Web3, always eager to understand the "why" behind the technologies I use. Whether it’s building with code or studying complex logic like predicate logic, I enjoy solving challenges through structured thinking and hands-on learning.
        </p>

        <p>
          I’ve worked on a variety of projects—from a music streaming web app to a platform that helps students and teachers share academic resources. Each one has taught me something new and pushed me to grow.
        </p>

        <p>
          When I'm not coding for 7+ hours a day (yes, I really enjoy it!), you'll find me learning a new concept, improving my portfolio, or just brainstorming what to build next.
        </p>

        <p>
          Thanks for visiting—my journey is just getting started, and I’m excited to grow into a data-driven developer who bridges creativity with deep technical insight.
        </p>
      </div>
    </div>
  );
};

export default About;

