import React, { useState, useEffect } from "react";
import moment from 'moment';
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
 Input,
  Label,
  Row,
  Col,
} from "reactstrap";

import { Typography, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import firebase from "./Firebase.js";


export default function ChatBox() {
  const db = firebase.firestore();
  const videoID = useSelector((state) => state.videoID);
  const [chats, setChats] = useState([]);
  const [username, setusername] = useState();
  const [chat, setChat] = useState("");
  const [inputvalue,setInput] = useState();
    

  useEffect(() => {
      
    axios
      .get("http://localhost:8000/api/auth/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setusername(res.data.username);
      });
 
    db.collection("chats").where("videoID", "==", videoID).orderBy("timestamp")
      .get()
      .then((res) => {

        const display = res.docs.map((doc) => doc.data());
        const docID = res.docs.map((doc) => doc.id);
        console.log(docID)
        setChats(display);
        console.log(display);
        //setComments(res.map(commentz=>commentz.data() ));
      });

  }, []);

  
  const handleSubmit = (event) =>{
    event.preventDefault();
    setChat(""+"");
    const datetime= moment().startOf('hour').fromNow();
   
    db.collection("chats").add({
      username: username,
      body: chat,
      videoID: videoID,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    const tempchat= [{username: username,
      body: chat,
      videoID: videoID,
      time: datetime}];
    setChats(chats.concat(tempchat))
  }
const disability = () =>{
  if (chat==""){
    return true;
  }
  return false
}
  





  return (
    <div>
      <Card style={{width:'80%'}}>
          <div style={{marginLeft:'20px'}}>
          <Typography variant="h5" style={{color:'white',fontFamily:'Ubuntu',fontWeight:'bold',marginTop:'20px'}}>Welcome Summoners!</Typography>
   
     <hr style={{color:'white',border:'1px solid white',width:'500px'}}></hr>
       

      
      <div style={{marginTop:'10px'}}>
      {chats.map((singlechat) => (
        
      <div>  
        <h4 style={{display: 'inline-block',marginRight:'20px',marginBottom:'-10px',color:'white',fontFamily:'Ubuntu',fontWeight:'bold'}}>{singlechat.username}:</h4>
        <span style={{marginLeft:'5px',color:'white',fontFamily:'Ubuntu'}}>{singlechat.body}</span>
        </div>
      
      
      ))}</div>
<div style={{display:'inline'}} >
    <CardFooter style={{marginLeft:'-20px'}}>
            <Input
            onChange={(e) => setChat(e.target.value)}
            placeholder="Write a comment"
            variant = "outlined"
            value={chat}
            multiline="true"
            style={{color:'black',fontFamily:'Ubuntu',fontSize:'12px', width:'60%',marginRight:'20px',backgroundColor:'white',display:'inline',marginBottom:'20px'}}
            />
          
          <Button outline color="secondary" disabled={disability()} size="sm" onClick={(e)=>handleSubmit(e)}>Send</Button>
          </CardFooter>
          </div>
          </div>
</Card>
    </div>
  );
}
