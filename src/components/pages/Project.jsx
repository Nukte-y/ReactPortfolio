import React from 'react';
import Card from '../Card';
import projects from '../projects.json/';

function Project() {
  return (
    <>
      <div style={{backgroundSize:"cover",backgroundImage:"url(/src/components/pages/assets/images/contactUs1.jpg)"}}>
      <h1 style={{border:"none", backgroundColor:"transparent"}}>Projects Page</h1>
        <p style={{marginLeft:"30px"}}>
        Here are examples showcasing my projects,
        developed using HTML, Bootstrap, JavaScript, and integrating APIs.
        </p>
        <section className="work text-center" id="work">
          <div style={{backgroundColor: "white", marginTop:"5px" }} className="container-fluid content">
            <h2 className="sectionHeading">Projects</h2>
            <div className="line"></div>  {/* line just for decoration */}
            <div className="row">
              {projects.map(project => (
                <Card
                  key={project.id} 
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  github={project.github}
                  deployed={project.deployed}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Project;

