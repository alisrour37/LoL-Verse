import React, { useState, useEffect } from "react";
import axios from 'axios';
import uploadIcon from '../assets/img/upload1.png'
// reactstrap components
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
  Row,
  Col
} from "reactstrap";
import { setOriginalNode } from "typescript";

export default function UserProfile() {
  
const [firstname,setfirstname] = useState();
const [lastname,setlastname] = useState();
const [username,setusername] = useState();
const [about,setabout] = useState();
const [placeholderFN,setplaceholderFN] = useState();
const [placeholderLN,setplaceholderLN] = useState();
const [placeholderEmail,setplaceholderEmail] = useState();
const [placeholderUs,setplaceholderUs] = useState();
const [placeholderAB,setplaceholderAB] = useState();
const [upload,setupload] = useState('false');
const [image,setimage] = useState('null');
const [user_id,setuserid] = useState(localStorage.getItem('user_id'));
const [profile,setprofile] = useState();


useEffect(() => {
  axios.get('http://localhost:8000/api/auth/user', {
      headers: { Authorization: "Bearer " + localStorage.getItem('access_token') }
    })
    .then(res=>{
      setplaceholderFN(res.data.first_name);
      setplaceholderLN(res.data.last_name);
      setplaceholderEmail(res.data.email);
      setplaceholderUs(res.data.username);
      setplaceholderAB(res.data.about);
      setabout(res.data.about);
      setusername(res.data.username);
    })
}, []);

const handleImage=(event)=>{
  setimage(event.target.files[0]);
  setupload('true')
}
const handleSubmit = (event) =>{
  event.preventDefault();
  let request = new FormData();
  request.append('image',image);
    request.append('user_id', user_id);
    request.append('first_name',firstname);
    request.append('last_name',lastname);
    request.append('username',username)
    request.append('about', about)
    request.append('upload',upload)

    axios.post('http://localhost:8000/api/auth/profileUpdate', request, {
      headers: { Authorization: "Bearer " + localStorage.getItem('access_token') }
    })
}
const imgsrc = "http://localhost:8000/image/" + profile + ".png";
    return (
      <>
        <div className="content">
          <Row>
            
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form encType="multipart/form-data" onSubmit={handleSubmit}>
                  <Row>
                      <Col md="12">
                        <FormGroup >
                          <label htmlFor="exampleInputEmail1" >
                            Username
                          </label>
                          <Input id='Us' placeholder={placeholderUs} type="text" onChange={setusername}  />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            id='FN'
                            type="text"
                            onChange={setfirstname}
                            placeholder={placeholderFN}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            id='LN'
                            onChange={setlastname}
                            type="text"
                            placeholder={placeholderLN}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup >
                          <label htmlFor="exampleInputEmail1" >
                            Email address
                          </label>
                          <Input placeholder={placeholderEmail} type="email" disabled />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                            placeholder={placeholderAB}
                            onChange={setabout}
                            rows="4"
                            id='AB'
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="1">
                        <FormGroup>
                          <label>Profile Picture</label>
                          <img src={uploadIcon} alt="" ></img>
                          <Input
                            type="file"
                            onChange={handleImage}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit" onClick={handleSubmit}>
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>

            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                      <img
                        src={imgsrc}
                      />
                      <h2 className="title">{username}</h2>
                  </div>
                  <div className="card-description" style={{ color: 'white', fontSize: 18}}>
                    {about}
                  </div>
                </CardBody>

              </Card>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }



