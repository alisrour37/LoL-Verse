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
<Button onClick={goback}>Go Back</Button>
    <Grid container>
      <Grid item xs={6}>
    <ReactPlayer
            width="80%"
            controls="true"
            height="500px"
            url={
              "https://www.youtube.com/watch?v=" +
              viewselection
            }
          ></ReactPlayer>
          </Grid>
          <Grid item xs={6}>
            <ChatBox/>
          </Grid>
          </Grid>
</>
);
}


      export default SingleVideo;