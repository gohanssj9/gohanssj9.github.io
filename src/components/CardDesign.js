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

const CardDesign = () => {
  return(
  <div className="projects-grid">
    <Card shadow={5} style={{width:'374px', margin:'0 auto', height: 'auto', position: 'relative'}}>
      <CardTitle style={{color: '#fff', height: '176px', 
        background:'url(https://www.telenor.com/wp-content/uploads/2018/07/artifiticial-intelligence-1250x585.jpg) center / cover'}}>Artificial Intelligence
      </CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </CardText>
      <CardActions border>
        <Button colored>GitHub</Button>
        <Button colored>Live Demo</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  </div>
  );
}

export default CardDesign;