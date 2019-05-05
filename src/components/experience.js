import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
  render(){
    return(
      <Grid>
        <Cell col={4} className="left-experience-col">
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8} className="right-experience-col">
          <h4 style={{marginTop:'0px'}}>{this.props.companyName}</h4>
          <p>{this.props.jobName} - {this.props.cityName}</p>
          <p className="description">{this.props.description}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience; 