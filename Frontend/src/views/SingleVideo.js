import React, { useState, useEffect } from 'react';
import {Button} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import ReactPlayer from 'react-player';

function SingleVideo (){
const viewselection = useSelector((state) => state.videoID);
const dispatch= useDispatch();
const goback= ()=>{
    dispatch({ type: 'DESELECT' })
}
return(
    <>
<Button onClick={goback}>Go Back</Button>
    <ReactPlayer
            width="50%"
            controls="true"
            height="500px"
            url={
              "https://www.youtube.com/watch?v=" +
              viewselection
            }
          ></ReactPlayer>
</>
);


        }


      export default SingleVideo;