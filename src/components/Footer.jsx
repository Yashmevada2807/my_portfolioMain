import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full  my-5 flex relative overflow-hidden'>
            <div className="py-4 w-full flex justify-center  animate-marquee">
                {["HTML",
                    "CSS",
                    "JavaScript",
                    "Tailwind CSS",
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "C++",
                    "Unity Engine",
                    "Unreal Engine",].map((tech, index) => (
                    <span key={index} className="mx-4 border-[1px] px-4 rounded-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </footer>
    )
}

export default Footer
