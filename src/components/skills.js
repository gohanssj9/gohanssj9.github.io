import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
  render(){
    return (
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}><p className="margin-cancel">{this.props.skillName}</p>
            <ProgressBar style={{margin:'auto', width:'75%'}} progress={this.props.skillValue} />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;