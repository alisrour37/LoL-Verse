import React, { useState, useEffect } from 'react';

function SingleVideo (){

const mapStateToProps = state => {
    return {
        videoId: state.videoId
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => 
        dispatch({type:'INCREMENT'})
    };
};

return(

    <ReactPlayer
            width="100%"
            controls="true"
            height="200px"
            url={
              "https://www.youtube.com/watch?v=" +
              this.props.videoId
            }
          ></ReactPlayer>

);


        }


      export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo);