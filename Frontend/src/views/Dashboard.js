/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  CardSubtitle,
  CardDeck,
  CardImgOverlay,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import ReactPlayer from "react-player";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// core components
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { styled } from "@material-ui/core/styles";
import pic from "assets/img/lol-logo.png";

function Dashboard() {
  const [bigChartData, setBgChartData] = useState("data1");
  const [youtube, setYoutube] = useState([]);
  const [videoid, setVideoid] = useState(null);

  useEffect(() => {
    
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLx1tUfSuJjy04SqlSXmYBGPiK-C3e3cjd&key=AIzaSyCXBBKXi06vMqoijRACFJPxpJtj38c17vs"
      )
      .then((res) => {
        setYoutube(res.data.items);
      });
  }, []);

  function Press() {
    console.log(Math.random());
  }

  return (
    <>
      <div className="content">
        <div style={{ width: "30%", marginBottom: "100px" }}>
          <Input
            style={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "white",
            }}
            placeholder="Type to search for a highlight"
          ></Input>
        </div>
        <Grid container spacing={3}>
          {youtube.map(video => {
            return(
            <Grid item xs={12} sm={4}>
              <Card style={{ height: "491px", width: "477px" }}>
                <CardHeader width="100%" style={{ pointerEvents: "none" }}>
                  <CardImg
                    style={{ height: "100%" }}
                    src={video.snippet.thumbnails.high.url}
                  ></CardImg>
                </CardHeader>

                <CardBody>
                  <CardTitle style={{ overflow: "hidden" }}>
                    {video.snippet.title}
                  </CardTitle>
                  <CardSubtitle>Published By: Onivia</CardSubtitle>
                  <Button >Watch Now</Button>
                </CardBody>
              </Card>
            </Grid>)
          })}
        </Grid>
      </div>
    </>
  );
}

export default Dashboard;
