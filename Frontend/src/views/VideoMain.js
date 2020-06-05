import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Elastic from './Elastic.js'

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
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PLx1tUfSuJjy2WRnpDWiCNhFGroQYnI0o7&key=AIzaSyCXBBKXi06vMqoijRACFJPxpJtj38c17vs";
  useEffect(() => {
    axios.get(url).then((res) => {
      setYoutube(res.data.items);
    });
  }, []);
  //const changeInputValue = (newValue) => {dispatch({ type: 'UPDATE_INPUT', data: newValue,});};
  return (
    <>
      <div className="content">
        
        <Card>
          <CardHeader>{count}</CardHeader>
        </Card>
       
          <Elastic/>

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
