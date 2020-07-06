import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components';
import { Layout } from "antd";
import { Landing, Drawaphone } from './pages/index';
import 'antd/dist/antd.css'

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StyledLayout>
          <Content>
            <Router>
              <Route path="/" exact component={Landing}/>
              <Route path="/drawaphone" exact component={Drawaphone}/>
            </Router>
          </Content>
        </StyledLayout>
      </div>
    );
  }
}

export default App;
