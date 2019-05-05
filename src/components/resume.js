import React, {Component} from 'react';
import {Grid, Cell, Button} from 'react-mdl';

import Education from './education.js';
import Experience from './experience.js';
import Skills from './skills.js';

class Resume extends Component {
  render(){ 
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="images/myself.jpg"
                alt="avatar"
                style={{height:'200px', borderRadius:'10px'}}
              />
            </div>
            <h2 style={{paddingTop:'0.5em', textAlign:'center'}}>Sriteja Ayyagari</h2>
            <h4 style={{color:'grey', textAlign:'center'}}>Programmer</h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%', margin:'auto'}} />
            <p style={{padding:'20px 10px', marginBottom: '0px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%', margin:'auto'}} />
            <div className="button-class">
              <Button raised colored ripple style={{margin:'auto'}}>
                <p>Download Resume Now!</p>
              </Button>
            </div>
          </Cell>
          <Cell col={8} className="resume-right-col">
          <h2 className="resume-right-col-heading">Experience</h2>
            <Experience 
              startYear={"February 2019"}
              endYear={"Present"}
              companyName={"Electronic Arts Games Pvt Ltd"}
              jobName={"Software Engineer I"}
              cityName={"Hyderabad"}
              description={""}
            />
            <Experience 
              startYear={"June 2018"}
              endYear={"February 2019"}
              companyName={"Riktam Technologies Pvt Ltd"}
              jobName={"Software Engineer I"}
              cityName={"Hyderabad"}
              description={
                "Worked as a Software Developer and revamped the whole UI for Tigersheet.\n • Learnt ReactJS, ReactNative and JS frameworks such as Webix and NodeJS as part of the training, along with making mockups of real websites. \n• Learnt Android App Development to create mockups of different real time apps that are available in the PlayStore."
              }
            />
            <Experience 
              startYear={"February 2018"}
              endYear={"June 2018"}
              companyName={"JUSPAY"}
              jobName={"Software Engineer Intern"}
              cityName={"Bengaluru"}
              description={
                "Involved with the BHIM UPI team in Juspay.\n• Designed and created working modules for Cross Platform Mobile Development using Purescript, a functional programming language."
              }
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

          <h2 className="resume-right-col-heading">Education</h2>
            <Education 
              startYear={"2014"}
              endYear={"2018"}
              schoolName={"Anil Neerukonda Institute of Technology and Sciences"}
              degree={"Bachelor's of Technology"}
              majors={"Computer Science Engineering"}
              metric={"CGPA"}
              CGPA={"7.93"}
            />
            <Education 
              startYear={"2012"}
              endYear={"2014"}
              schoolName={"Ascent Classes"}
              degree={"High School"}
              majors={"Physical Sciences"}
              metric={"Percentage"}
              CGPA={"91.8"}
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

          <h2 className="resume-right-col-heading">Skills</h2>
            <Skills skillName={"C++"} skillValue={85}/>
            <Skills skillName={"Python"} skillValue={60}/>
            <Skills skillName={"Web Development"} skillValue={80}/>
            <Skills skillName={"Machine Learning"} skillValue={40}/>
            <Skills skillName={"ReactNative"} skillValue={65}/>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;