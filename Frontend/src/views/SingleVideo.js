import React, { useState, useEffect } from 'react';

export default function SingleVideo (){


return(

    <ReactPlayer
            width="100%"
            controls="true"
            height="200px"
            url={
              "https://www.youtube.com/watch?v=" +
              video.snippet.resourceId.videoId
            }
          ></ReactPlayer>

);


        }

