import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import a from './a.jpg';
import { Button, Segment } from 'semantic-ui-react';
import { Link ,Switch,BrowserRouter,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Segment inverted>
      <Link to="/map"><Button inverted color='teal'>
        Map
      </Button></Link>
      <Link to="/register">
      <Button inverted color='teal'>
        Register 
      </Button></Link>
      <Link to="/feedback">
      <Button inverted color='teal'>
        FeedBack
      </Button>
      </Link>
      <Link to="/contact">
      <Button inverted color='teal'>
        Contact us
      </Button>
      </Link>
      </Segment>
        <Particles params={{
            		particles: {
                  interactivity:{
                    detect_on:"canvas",
                    events:
                    {onhover:{enable:true,mode:"repulse"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:400}}},
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					//blur: 3
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                //backgroundImage: `url(${a})` ,
                background: "#6778c8",
              }}/>
              <BrowserRouter>
              <Route path='/register'></Route>
              <Route path='/contact'></Route>
              <Route path='/feedback'></Route>
              <Route path='/map'></Route>
              </BrowserRouter>

      </div>
    );
  }
}

export default App;
