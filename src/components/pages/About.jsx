import React from 'react';
import Skill from '../skill';

function About() {
  return (
    <>
      <h1>About Page</h1>
      <section id="about" className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <!--profile pic container--> */}
            <img src="/src/components/pages/assets/images/profile.PNG" className="image" alt="Profile" />
            <div className="mt-3">
            <h5>Skills</h5>
            <Skill skillName="HTML" percentage={65} />
            <Skill skillName="CSS3" percentage={68} />
            <Skill skillName="JavaScript" percentage={65} />
            <Skill skillName="React" percentage={20} />
            <Skill skillName="Bootstrap" percentage={50} />
            <Skill skillName="Git" percentage={85} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="pt-4 pt-md-0">
              <h5 className="title-left border-bottom border-3 pb-2">
                About me
              </h5>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eligendi voluptatum ipsam placeat quibusdam error iusto libero, cupiditate rerum a accusantium earum deleniti asperiores mollitia fugiat laudantium excepturi velit saepe.
              </p>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eligendi voluptatum ipsam placeat quibusdam error iusto libero, cupiditate rerum a accusantium earum deleniti asperiores mollitia fugiat laudantium excepturi velit saepe.
              </p>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eligendi voluptatum ipsam placeat quibusdam error iusto libero, cupiditate rerum a accusantium earum deleniti asperiores mollitia fugiat laudantium excepturi velit saepe.
              </p>
              <a href="/src/components/pages/assets/Sample Resume - Web Development.pdf" 
              download className="btn btn-primary">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

