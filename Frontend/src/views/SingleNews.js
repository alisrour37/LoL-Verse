import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
} from "reactstrap";
import { Grid } from "@material-ui/core";

export default function SingleNews() {
  const newsImage = useSelector((state) => state.newsImage);
  const newsBody = useSelector((state) => state.newsBody);
  const newsTitle = useSelector((state) => state.newsTitle);
  const dispatch = useDispatch();
  const goback = () => {
    dispatch({ type: "DESELECTNEWS" });
  };
  return (
    <>
      <Grid container>
        <Grid item xs={2} style={{marginRight:'-20px'}}>
          <div></div>
          <Button onClick={goback} style={{position:'fixed'}}>Go Back</Button>
        </Grid>
        <Grid item xs={9}>
          <Card style={{ height: "1200px", width: "100%", alignSelf: "center" }}>
            <CardHeader width="100%" style={{ pointerEvents: "none" }}>
              <CardImg style={{ height: "100%" }} src={newsImage}></CardImg>
            </CardHeader>

            <CardBody>
              <CardTitle style={{ overflow: "hidden" }}>{newsTitle}</CardTitle>
              <CardSubtitle>{newsBody}</CardSubtitle>
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
