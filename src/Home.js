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
  const [selectedImages,setSelectedImages]=useState([]);
  return (
    <Router>
      <Switch>
        <Route path="/game">
          <Game selectedImages={selectedImages} />
        </Route>
        <Route path="">
          <FileUpload setSelectedImages={setSelectedImages}/>
        </Route>
      </Switch>
    </Router>
  )
}
export default Home;