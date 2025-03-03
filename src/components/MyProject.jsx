import React from 'react'
import ProjectCard from './ProjectCard'

const MyProject = () => {
  return (
    <div className=' w-auto px-15  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center py-6 shadow-2xl'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
  )
}

export default MyProject
