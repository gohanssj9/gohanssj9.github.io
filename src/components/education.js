import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {
  render(){
    return(
      <Grid>
        <Cell col={4} className="left-education-col">
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8} className="right-education-col">
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.degree} - {this.props.majors}</p>
          <p>{this.props.metric}: {this.props.CGPA}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education; 