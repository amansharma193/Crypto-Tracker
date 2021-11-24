import React, {useState, useEffect} from "react";
import "./styles.css";
import styled from 'styled-components';
import Random from "./Random";
// css for counter
const CounterStyle=styled.div`
  text-align:center;
  width:100%;
`
// css for index of image
const ClickedStyle=styled.div`
  color:black;
  font-size:18px;
  padding:0px 50px;
`
const Game=({selectedImages})=>{
  // to store count
  const [counter, setCounter] = useState(10);
  // map for index to image
  const [indexMap, setIndexMap] = useState(new Map());
  // random indexes to retrieve random inages
  const [randomArray,setRandomArray] = useState([]);
  // to store clicked images
  const [clicked,setClicked] = useState(new Map());
  if(randomArray.length==0){
    // getting random array 
    setRandomArray((prev)=>prev=Random(selectedImages.length));
    for(let i=0;i<10;i++){
      // mapping to index
      setIndexMap(pre=>pre.set(i,selectedImages[i%selectedImages.length]))
    }
  }
  const saveImageToShow=(count)=>{
    // saving clicked counter images
    setClicked((pre)=>pre.set(count-1,indexMap.get(count-1)));
  }
  useEffect(() => {
    const interval = setInterval(() => {
      // decrementing counter from 10 to 1
      setCounter(counter==1?10:counter-1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const renderPhotos = (source) => {
    // showing images from map
    return [...source.keys()].map((key) => {
      return( 
        <div>
          <ClickedStyle >
            Index:- {key+1}
          </ClickedStyle>
          <img src={source.get(key)} alt="" key={source.get(key)} />
        </div>
      )
    });
  };

  return(
    <CounterStyle>
      <div>
      <div className="result">{renderPhotos(indexMap)}</div>
      </div>
      <h1>{counter}</h1>
      <div className="label-holder">
        <label onClick={()=>saveImageToShow(counter)} htmlFor="file" className="label">
          Select Image By Number
        </label>
      </div>
      <div>
        <div className="result">{renderPhotos(clicked)}</div>
      </div>
    </CounterStyle>
  )
}
export default Game;