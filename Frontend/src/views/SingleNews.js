import React from 'react';

import {useSelector,useDispatch} from 'react-redux'
import {
    Button,
   
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardImg,
     CardSubtitle,
   
  } from "reactstrap";

export default function SingleNews(){
    const viewselection = useSelector((state) => state.videoID);
    const dispatch= useDispatch();
    const goback= ()=>{
        dispatch({ type: 'DESELECTNEWS' })
    }
return(
<>
    <Button onClick={goback}>Go Back</Button>
<Card style={{ height: "491px", width: "477px" }}>
                      <CardHeader
                        width="100%"
                        style={{ pointerEvents: "none" }}
                      >
                        <CardImg
                          style={{ height: "100%" }}
                          src={item.snippet.thumbnails.high.url}
                        ></CardImg>
                      </CardHeader>

                      <CardBody>
                        <CardTitle style={{ overflow: "hidden" }}>
                          {item.snippet.title}
                        </CardTitle>
                        <CardSubtitle>Published By: Onivia</CardSubtitle>
                        
                      </CardBody>
                    </Card>

                    </>
);
}
