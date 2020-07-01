import React, { useState, useEffect } from "react";
import moment from 'moment';
import axios from "axios";
import {
  Button,
  Card,
  CardFooter,
  Input} from "reactstrap";
import Avatar from '@material-ui/core/Avatar';
import { Typography, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import firebase from "./Firebase.js";


export default function ChatBox() {

  const db = firebase.firestore();
  const videoID = useSelector((state) => state.videoID);
  const [chats, setChats] = useState([]);
  const [username, setusername] = useState();
  const [chat, setChat] = useState("");
    

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
        setChats(display);
       
      });
      db.collection("chats").where("videoID", "==", videoID).orderBy("timestamp")
      .onSnapshot(
        function(querySnapshot) {
          var newchats = [];
          querySnapshot.forEach(function(doc) {
              newchats.push(doc.data());
          });
          setChats(newchats);
      }
      )
      
  }, []);

  
  const handleSubmit = (event) =>{
    if (event.target.id=="button" || event.key=='Enter'){
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
  }
//disability is used to disable the button if no writing exists
  const disability = () =>{
  if (chat==""){
    return true;
  }
  return false
}

  return (
    <div>
      <Card style={{width:'90%',height:'545px'}}>
          <div style={{marginLeft:'20px'}}>
          <Typography variant="h5" style={{color:'white',fontFamily:'Ubuntu',fontWeight:'bold',marginTop:'20px'}}>Welcome Summoners!</Typography>
   
     <hr style={{color:'white',border:'1px solid white',width:'435px',marginLeft:'-10px'}}></hr>
       

      
      <div style={{marginTop:'10px',overflowY: "scroll", minHeight: "390px", maxHeight: "390px", scrollbarWidth: "thin", scrollbarColor: "#1e1e2e #27293d"}}>
      {chats.map((singlechat) => (
        
      <div style={{marginTop:'10px'}}>  
        
        <div style={{display:'inline-block', verticalAlign:'middle',marginRight:'10px'}}>
                                    <Avatar>
                                        <img src={"http://localhost:8000/image/" + singlechat.username + ".png"} />
                                    </Avatar>
                                    </div>
                                    <div style={{display:'inline-block', verticalAlign:'middle'}}>
        <h4 style={{display: 'inline-block',marginRight:'20px',marginBottom:'-10px',color:'white',fontFamily:'Ubuntu',fontWeight:'bold'}}>{singlechat.username}:</h4>
        </div>
        <div style={{display:'inline-block', verticalAlign:'middle'}}>
        <span style={{marginLeft:'3px',marginBottom:'1px',color:'white',fontFamily:'Ubuntu'}}>{singlechat.body}</span>
        </div>
        </div>
      
      
      ))}</div>
<div style={{display:'inline'}} >
    <CardFooter style={{marginLeft:'-20px'}}>
            <Input
            onChange={(e) => setChat(e.target.value)}
            onKeyDown={(e) =>handleSubmit(e)}
            placeholder="Write a comment"
            variant = "outlined"
            value={chat}
            multiline="true"
            style={{color:'black',fontFamily:'Ubuntu',fontSize:'12px', width:'78%',marginRight:'20px',backgroundColor:'white',display:'inline',marginBottom:'20px'}}
            />
          
          <Button outline color="secondary" disabled={disability()} id="button" size="sm" onClick={(e)=>handleSubmit(e)}>Send</Button>
          </CardFooter>
          </div>
          </div>
</Card>
    </div>
  );
}
