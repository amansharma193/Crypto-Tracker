import React, { useState } from "react";
import FileUpload from "./FileUpload";
import "./styles.css";
import Game from './Game';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const Home=()=>{
  // To store uploaded images  
  const [selectedImages,setSelectedImages]=useState([]);
  {/* Router Setup */}
  return (
    <Router>
      <Switch>
        <Route path="/game">
          {/* sending uploaded images to game  */}
          <Game selectedImages={selectedImages} />
        </Route>
        <Route path="">
          {/* getting uploaded images */}
          <FileUpload setSelectedImages={setSelectedImages}/>
        </Route>
      </Switch>
    </Router>
  )
}
export default Home;