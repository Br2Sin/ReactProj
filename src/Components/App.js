import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'react-bootstrap';
import 'react-router-dom'
import MainContent from "./MainContent";
import Navbar from './Layout/Navbar'

class App extends Component{
  render(){
    return(
      <div>           
          <MainContent/>
      </div>
    )
  }
}
export default App;
