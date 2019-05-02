import React, {Component} from 'react';
import {
  Tabs, 
  Tab, 
  Grid, 
  Cell, 
  Card, 
  CardTitle, 
  CardText,
  CardActions, 
  Button, 
  CardMenu, 
  IconButton
} from 'react-mdl';

import CardDesign from './CardDesign';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    };

    this.toggleCategories = this.toggleCategories.bind(this);
  }
  toggleCategories = () => {
    const {activeTab} = this.state;
    console.log(activeTab);
    switch(this.state.activeTab){
      case 0:
        return (
          <div className="content">
            <CardDesign />
            <CardDesign />
            <CardDesign />
            <CardDesign />
          </div>
        );
      case 1:
      return (
        <div className="content">
          <CardDesign />
          <CardDesign />
          <CardDesign />
          <CardDesign />
        </div>      
      );
      case 2:
      return (
        <div className="content">
          <CardDesign />
          <CardDesign />
          <CardDesign />
          <CardDesign />
        </div>      
      );
      default:
        console.log(this.state.activeTab);
        break;
    }
  }

  render(){ 
      return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>AI</Tab>
          <Tab>OpenCV</Tab>
          <Tab>ReactJS</Tab>
        </Tabs>

        <Grid className="margin-adjust">
          <Cell col={12}>
            <div>
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;