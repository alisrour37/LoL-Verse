import React, { useState, useEffect } from "react";
import moment from 'moment';
import axios from "axios";
import dislikebutton from '../assets/img/dislikebutton.png';
import likebutton from '../assets/img/likebutton.png';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";

import { Typography, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import store from "./store.js";
import firebase from "./Firebase.js";


export default function Comments() {
  const db = firebase.firestore();
  
  const newsID = useSelector((state) => state.newsID);

  const [comments, setComments] = useState([]);
  const [username, setusername] = useState();
  const [comment, setComment] = useState("");
  const [inputvalue,setInput] = useState();
  const [likes,setLikes] = useState(0);
  const [dislikes,setDislikes] = useState(0);
  const [likecolor, setlikecolor] = useState("white");
  const [dislikecolor, setdislikecolor] = useState("white");
  const [documentID, setdocumentID] = useState();

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
 
    db.collection("comments").where("newsID", "==", newsID).orderBy("time","desc")
      .get()
      .then((res) => {

        const display = res.docs.map((doc) => doc.data());
        const docID = res.docs.map((doc) => doc.id);
        console.log(docID)
        setComments(display);
        console.log(display);
        //setComments(res.map(commentz=>commentz.data() ));
      });

      db.collection("likes").where("newsID", "==", newsID)
      .get()
      .then((res) => {
        const display = res.docs.map((doc) => doc.data());
        if(display.length==0){
          db.collection("likes").add({
            dislikes: 0,
            likes: 0,
            newsID: newsID
          });}
          else{

        setLikes(display[0].likes);
        setDislikes(display[0].dislikes);
        const docID = res.docs.map((doc) => doc.id);
        setdocumentID(docID[0]);
          }
        
        //setComments(res.map(commentz=>commentz.data() ));
      });


  }, []);

  const handleAdd = () => {
    console.log("batata");
    db.collection("comments").add({
      username: "alisrour37",
      body: "Skafi jeeb shawarma",
      newsID: "1",
    });
  };
  const handleSubmit = (event) =>{
    event.preventDefault();
    setInput("")
    const datetime= moment().format('MMMM Do YYYY, h:mm:ss a');
   
    db.collection("comments").add({
      username: username,
      body: comment,
      newsID: newsID,
      time: datetime
    });
    const tempcomment= [{username: username,
      body: comment,
      newsID: newsID,
      time: datetime}];
    setComments(tempcomment.concat(comments))
  }
const disability = () =>{
  if (comment==""){
    return true;
  }
  return false
}

const like = () =>{
  if(dislikecolor == 'white' && likecolor == 'white'){
    setlikecolor('blue');
    setLikes(likes+1);

db.collection("likes").doc(documentID).update({
  likes: firebase.firestore.FieldValue.increment(1)
 
  });
}
  else if(dislikecolor=='white' && likecolor=='blue'){
    setlikecolor('white')
    setLikes(likes-1);

db.collection("likes").doc(documentID).update({
  likes: firebase.firestore.FieldValue.increment(-1)
  
});
  }
  else{
  setdislikecolor('white');
  setDislikes(dislikes-1);
 
    setLikes(likes+1);
    setlikecolor("blue");
  
  db.collection("likes").doc(documentID).update({
    likes: firebase.firestore.FieldValue.increment(1),
    dislikes: firebase.firestore.FieldValue.increment(-1)
  })

  }
}

const dislike=()=>{
  if(dislikecolor == 'white' && likecolor == 'white'){
    setdislikecolor('red');
    setDislikes(dislikes+1);

db.collection("likes").doc(documentID).update({
  dislikes: firebase.firestore.FieldValue.increment(1)
 
  });
}
  else if(dislikecolor=='red' && likecolor=='white'){
    setdislikecolor('white')
    setDislikes(dislikes-1);

db.collection("likes").doc(documentID).update({
  dislikes: firebase.firestore.FieldValue.increment(-1)
  
});
  }
  else{
  setdislikecolor('red');
  setDislikes(dislikes+1);
 
    setLikes(likes-1);
    setlikecolor("white");
  
  db.collection("likes").doc(documentID).update({
    likes: firebase.firestore.FieldValue.increment(-1),
    dislikes: firebase.firestore.FieldValue.increment(1)
  })

  }
}
  return (
    <div style={{marginLeft:'238px',marginTop:'20px'}}>
      <Grid container>
        <Grid item xs ={1} style={{marginRight:'-50px'}}>
        <img style={{height:'30px', width:'30px',marginRight:'-70px'}} src={likebutton} onClick={()=> like()} ></img>
        </Grid>
        <Grid item xs ={1} style={{marginRight:'-40px'}}>
        <h4 style={{color:likecolor,width:'10%',marginTop:'2px'}}>{likes}</h4>
        </Grid>
        <Grid item xs ={1} style={{marginRight:'-50px'}}>
        <img style={{height:'30px', width:'30px'}}src={dislikebutton} onClick={()=> dislike()}></img>
        </Grid>
        <Grid item xs ={1}>
        <Typography style={{color:dislikecolor,width:'10%',marginTop:'2px'}}>{dislikes}</Typography>
        </Grid>
        </Grid>
 
     <hr style={{color:'white',border:'1px solid white',width:'1140px'}}></hr>
       

     
      <Typography variant="h4" style={{color:'white',fontFamily:'Ubuntu',marginBottom:'10px'}}>Comments</Typography>
      <div style={{display:'inline'}} >
            <Input
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment"
            variant = "outlined"
            value={inputvalue}
            multiline="true"
            style={{color:'black',fontFamily:'Ubuntu',fontSize:'12px', width:'60%',marginRight:'20px',backgroundColor:'white',display:'inline'}}
            />
          
          <Button outline color="secondary" disabled={disability()} size="sm" onClick={(e)=>handleSubmit(e)}>Comment</Button>
          </div>
      <div style={{marginTop:'10px'}}>
      {comments.map((singlecomment) => (
        
      <div>  
        <h4 style={{display: 'inline-block',marginRight:'20px',marginBottom:'-10px',color:'white',fontFamily:'Ubuntu'}}>{singlecomment.username}</h4>
        <span>{singlecomment.time}</span>
        <h5>{singlecomment.body}</h5>
        </div>
      
      
      ))}</div>


    </div>
  );
}
