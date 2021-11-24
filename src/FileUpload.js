import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

const FileUpload=({setSelectedImages})=>{
  const history = useHistory();

  // handling file uploading
  const handleImageChange = (e) => {

    // if files has been uploaded
    if (e.target.files) {

      // storing urls
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );

      // storing urls for sending to game
      setSelectedImages(filesArray)

      // after file upload redirecting to game
      history.push("/game");
    }
  };
  
  return (
    <div className="app">
      <div className="heading">React Multiple Images Preview</div>
      <div>
        <input type="file" id="file" multiple onChange={handleImageChange} />
        src/FileUpload.js
      </div>
    </div>
  )
}
export default FileUpload;