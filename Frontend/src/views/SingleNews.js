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
    const newsImage = useSelector((state) => state.newsImage);
    const newsBody = useSelector((state) => state.newsBody);
    const newsTitle = useSelector((state) => state.newsTitle);
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
                          src={newsImage}
                        ></CardImg>
                      </CardHeader>

                      <CardBody>
                        <CardTitle style={{ overflow: "hidden" }}>
                          {newsTitle}
                        </CardTitle>
                        <CardSubtitle>{newsBody}</CardSubtitle>
                        
                      </CardBody>
                    </Card>

                    </>
);
}
