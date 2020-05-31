import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Elasticsearch, Results, Facet } from "react-elasticsearch";

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
import { useDispatch, useSelector } from "react-redux";
function VideoMain() {

  const count = useSelector((state) => state.counter);
  const [youtube, setYoutube] = useState([]);

  const url =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLx1tUfSuJjy04SqlSXmYBGPiK-C3e3cjd&key=AIzaSyCXBBKXi06vMqoijRACFJPxpJtj38c17vs";
  useEffect(() => {
    axios.get(url).then((res) => {
      setYoutube(res.data.items);
    });
  }, []);

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
        <Card>
          <CardHeader>{count}</CardHeader>
        </Card>

        <Grid container spacing={3}>
          {youtube.map((video) => {
            return (
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
                    <Button onClick={console.log("10")}>Watch Now</Button>
                  </CardBody>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default VideoMain;
