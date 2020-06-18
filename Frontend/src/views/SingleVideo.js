import React from 'react';
import {Button} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import ReactPlayer from 'react-player';
import { Grid } from '@material-ui/core';
import ChatBox from './ChatBox.js';

function SingleVideo (){
const viewselection = useSelector((state) => state.videoID);
const dispatch= useDispatch();
const goback= ()=>{
    dispatch({ type: 'DESELECT' })
}
return(
    <>
<Button onClick={goback}>Leave</Button>
    <Grid container style={{marginTop:'20px'}}>
      <Grid item xs={8}>
    <ReactPlayer
            width="95%"
            controls="false"
            height="545px"
            playing="true"
            onProgress="playedSeconds: 120"
            url={
              "https://www.youtube.com/watch?v=" +
              viewselection
            }
          ></ReactPlayer>
          </Grid>
          <Grid item xs={4}>
            <ChatBox/>
          </Grid>
          </Grid>
</>
);
}


      export default SingleVideo;