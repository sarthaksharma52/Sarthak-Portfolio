import React from 'react';
import Card from "./Card";
import projects from './Data/projects.json';

const ProjectsImg = () => {
  return (
    <>
    <div className="projectImgReal">

    <div className="projectrep">
          <div className="section1sayhello">
            <p className="hello">.project</p>
            <div className="hrsayhello">
              <hr />
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((data) => (
            <div key={data.id}>
              <div className={data.id}
              data-aos="fade-up"
              data-aos-duration="4000"
              data-aos-anchor-placement="top-center"
              >
              <Card
                
                title={data.title}
                year={data.year}
                imageSrc={data.imageSrc}
                liveLink={data.liveLink}
                sourceCodeLink={data.sourceCodeLink}
                cardColor={data.cardColor}
                textColor={data.textColor}
              />
              </div>
            </div>
          ))}
        </div>
    </div>
      
    </>
  )
}

export default ProjectsImg
