import React from "react";
import Elastic from "./Elastic.js";
import { useSelector } from "react-redux";
import SingleVideo from "./SingleVideo.js";

function VideoMain() {
  // const url =
  //   "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PLx1tUfSuJjy2WRnpDWiCNhFGroQYnI0o7&key=AIzaSyCXBBKXi06vMqoijRACFJPxpJtj38c17vs";


  const viewselection = useSelector((state) => state.videoID);

  //const changeInputValue = (newValue) => {dispatch({ type: 'UPDATE_INPUT', data: newValue,});};
  return (
    <>
      <div className="content">
    
        {viewselection ? <SingleVideo /> : <Elastic />}
      </div>
    </>
  );
}

export default VideoMain;
