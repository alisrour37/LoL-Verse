import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Elastic from "./Elastic.js";

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
import SingleVideo from "./SingleVideo.js";

function VideoMain() {
  const url =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PLx1tUfSuJjy2WRnpDWiCNhFGroQYnI0o7&key=AIzaSyCXBBKXi06vMqoijRACFJPxpJtj38c17vs";


  const viewselection = useSelector((state) => state.counter);

  //const changeInputValue = (newValue) => {dispatch({ type: 'UPDATE_INPUT', data: newValue,});};
  return (
    <>
      <div className="content">
        {viewselection ? <SingleVideo /> : <Elastic />}
      </div>
    </>
  );
}

export default VideoMain;
