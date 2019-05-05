import React, { Component } from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import Main from './components/main';

import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Sriteja" scroll className="header-color">
            <Navigation>
              <Link to="/resume" className="header-text">Resume</Link>
              <Link to="/aboutme" className="header-text">About Me</Link>
              <Link to="/projects" className="header-text">Projects</Link>
              <Link to="/contact" className="header-text">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Sriteja">
            <Navigation>
              <Link to="/resume" className="header-text">Resume</Link>
              <Link to="/aboutme" className="header-text">About Me</Link>
              <Link to="/projects" className="header-text">Projects</Link>
              <Link to="/contact" className="header-text">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
