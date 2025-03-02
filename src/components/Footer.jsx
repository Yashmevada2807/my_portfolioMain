import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full  flex relative overflow-hidden'>
            <div className="py-4  w-full flex justify-center  animate-marquee">
                {["HTML",
                    "CSS",
                    "JavaScript",
                    "Tailwind CSS",
                    "React.js",
                    "Vercel",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "C++",
                    "Unity Engine",
                    "Unreal Engine",].map((tech, index) => (
                    <span key={index} className="mx-5 border-[1px] flex items-center px-5 text-center rounded-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </footer>
    )
}

export default Footer
