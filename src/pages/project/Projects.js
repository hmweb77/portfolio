import React from 'react'
import projectsData from "./ProjectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";

export default function Projects() {
  const ProjectList = () =>
  projectsData.map((project, i) => (
    <Project
      key={i}
      id={project.id}
      title={project.title}
      technologies={project.tags}
      // image={project.image}
       color={project.bgcolor}
      // github={project.github}
       deployed={project.deployed}
      description={project.description}
    />
  ));
  return (
    <section className="portfolio">
  
    <PageHeader title="Projects" description="View our work" />
    <div className="row">
      <ProjectList />
    </div>
  </section>
  )
}
