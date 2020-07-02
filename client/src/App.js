import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from "antd";
import Landing from './pages/Landing';
import 'antd/dist/antd.css'

const { Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Content>
            <Router>
              <Route path="/" exact component={Landing}/>
            </Router>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
