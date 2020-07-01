import React from "react";
import Comments from "./Comments.js";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardFooter,
} from "reactstrap";
import { Grid, Typography } from "@material-ui/core";

export default function SingleNews() {
  const newsImage = useSelector((state) => state.newsImage);
  const newsBody = useSelector((state) => state.newsBody);
  const newsTitle = useSelector((state) => state.newsTitle);
  const newsTime = useSelector((state) => state.newsTime);
  const dispatch = useDispatch();
  const goback = () => {
    dispatch({ type: "DESELECTNEWS" });
  };
  return (
    <>
      <Grid container>
        <Grid item xs={2} style={{ marginRight: "-25px" }}>
          <div></div>
          <Button onClick={goback} style={{ position: "fixed" }}>
            Check More News
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Card style={{ height: "100%", width: "100%", alignSelf: "center" }}>
            <CardHeader width="100%" style={{ pointerEvents: "none" }}>
              <CardTitle style={{ overflow: "hidden" }}>
                <Typography
                  variant="h5"
                  style={{ color: "white", fontFamily: "Ubuntu" }}
                >
                  {newsTitle}
                </Typography>
              </CardTitle>
              <CardImg style={{ height: "100%" }} src={newsImage}></CardImg>
              <Typography
                style={{
                  color: "white",
                  fontFamily: "Ubuntu",
                  marginTop: "10px",
                }}
              >
                Published by: DotEsports
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontFamily: "Ubuntu",
                  marginTop: "3px",
                  fontSize: "14px",
                }}
              >
                {newsTime}
              </Typography>
            </CardHeader>

            <CardFooter>
              <div
                style={{
                  color: "white",
                  marginTop: "115px",
                  fontFamily: "Roboto",
                  fontSize: "18px",
                }}
              >
                {newsBody}
              </div>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={10}>
          <Comments />
        </Grid>
      </Grid>
    </>
  );
}
