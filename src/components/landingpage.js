import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render(){ 
    return (
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col = {12} className="complete-cell">
            <img 
              src="images/supervegito.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              
              <p>HTML/CSS | Bootstrap | JavaScript | React | ReactNative | C++ | Python | Machine Learning</p>
              
              <div className="social-links">
                <a href="https://www.linkedin.com/in/sritejaayyagari/" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/gohanssj9/" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://www.hackerrank.com/gohanssj9" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-hackerrank" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;