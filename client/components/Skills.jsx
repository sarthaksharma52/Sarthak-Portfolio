import React from 'react'
import skills from './Data/skills.json'

const Skills = () => {
  return (
    <>
    <div className="section1about">
          <p className="aboutHR">.stack</p>
          <div className="hrskill">
            <hr />
          </div>
        </div>
    <div className="container skills">
          <div className="items" >
            {skills.map((data)=>(
              <>
                <div className="item" key={data.id}>
                  <div className={data.id}
                  data-aos="flip-left"
                  >
                  <img className="img" src={`/assets/${data.imageSrc}`} alt=""/>
                  <h3>{data.title}</h3>
                  </div>
                </div>
              </>
          ))}
          </div>
          
    </div>
    </>
  )
}

export default Skills
