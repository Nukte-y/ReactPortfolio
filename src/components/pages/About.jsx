import React from 'react';

function About() {
  return (
    <>
      <h1 style={{marginTop:"70px"}}>About Page</h1>
      <section id="about" className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <!--profile pic container--> */}
            <img src="/src/components/pages/assets/images/profile.PNG" className="image" alt="Profile" />
            <div className="mt-3">
            <h5>Skills</h5>
              <span className="fs-5">HTML</span>
              <span className="float-end fw-bold">65%</span>
              <div className="progress">
                {/* Bootstrap class progress bar */}
                <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className="fs-5">CSS3</span>
              <span className="float-end fw-bold">68%</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className="fs-5">JavaScript</span>
              <span className="float-end fw-bold">65%</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className="fs-5">React</span>
              <span className="float-end fw-bold">20%</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className="fs-5">Bootstrap</span>
              <span className="float-end fw-bold">60%</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className="fs-5">Git</span>
              <span className="float-end fw-bold">90%</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pt-4 pt-md-0">
              <h5 className="title-left border-bottom border-2 pb-2" style={{ borderColor: "#0078ff" }}>
                About me
              </h5>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eligendi voluptatum ipsam placeat quibusdam error iusto libero, cupiditate rerum a accusantium earum deleniti asperiores mollitia fugiat laudantium excepturi velit saepe.
              </p>
              {/* Add more paragraphs here */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

