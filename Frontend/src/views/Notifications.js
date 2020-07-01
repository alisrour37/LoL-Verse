import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import axios from 'axios';
import {useState, useEffect} from 'react';
import {
  UncontrolledAlert,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import firebase from "./Firebase.js";
import {useHistory} from 'react-router-dom';

export default function Notifications (){
  const history= useHistory();
  const db = firebase.firestore();
  const [notifications, setNotifications] = useState([]);
  const [username, setusername] = useState();
  const notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }

  };
 

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/auth/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setusername(res.data.username);
        db.collection("notifications").where("username", "==", res.data.username)
      .get()
      .then((res) => {

        const results = res.docs.map((doc) => doc.data());
        const docID = res.docs.map((doc) => doc.id);
        setNotifications(results);
      
      });
      });
  }, []);

    return (
      <>
        <div className="content">
          <div className="react-notification-alert-container">
        
          </div>
          <Row>
            {notifications.map((singlenotification)=>(
              <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notifications</CardTitle>
                </CardHeader>
                <CardBody>
                  <div href="/admin/user-profile" onClick={()=> history.push('/admin/'+singlenotification.target)}>
                  <UncontrolledAlert className="alert-with-icon" color="info" href="/admin/user-profile">
                    <span
                      className="tim-icons icon-bell-55"
                      data-notify="icon"
                    />
                    <span data-notify="message" href="/admin/user-profile">
           {singlenotification.body}         
           </span>
                  </UncontrolledAlert>
                  </div>
            
                </CardBody>
              </Card>
            </Col>
          
           

            ))}
            
          </Row>
        </div>
      </>
    );
 
}
