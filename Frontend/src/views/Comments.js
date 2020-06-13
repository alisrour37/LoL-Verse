import React, { useState, useEffect } from "react";
import axios from 'axios';
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
import { Typography } from "@material-ui/core";

export default function UserProfileApp() {
 
const [comments,setComments]= useState([]);
const [username,setusername] = useState();
const [comment,setComment]= useState();


useEffect(() => {
  axios.get('http://localhost:8000/api/auth/user', {
      headers: { Authorization: "Bearer " + localStorage.getItem('access_token') },
      data:null
    })
    .then(res=>{

        setComments(res.data)
        console.log(res.data)
        
    });
    axios.get('http://localhost:8000/api/auth/comments', {
      headers: { Authorization: "Bearer " + localStorage.getItem('access_token') },
     
    })
    .then(res=>{

        setusername(res.data.username)
        
    });
    
}, []);


const handleSubmit = (event) =>{
  event.preventDefault();
  let request = new FormData();
  
    request.append('username',username)
    request.append('comment', comment)
    request.append('id', newsID)

    axios.post('http://localhost:8000/api/auth/profileUpdate', request, {
      headers: { Authorization: "Bearer " + localStorage.getItem('access_token') }
    })
}
const imgsrc = "http://localhost:8000/image/" + user_id + ".png";
dispatch({type: 'IMGSRC', data: imgsrc});
    return (
      <>
        <div className="content" style={{marginTop:'3px'}}>
          <Row>
            
            <Col md="6">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form encType="multipart/form-data" onSubmit={()=>handleSubmit}>
                  <Row>
                      <Col md="12">
                        <FormGroup >
                          <label style={{color:'white'}} htmlFor="exampleInputEmail1" >
                            Username
                          </label>
                          <Input id='Us' placeholder={placeholderUs} type="text" disabled />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label style={{color:'white'}}>First Name</label>
                          <Input
                            id='FN'
                            type="text"
                            value={firstname}
                            onChange={e=> setfirstname(e.target.value)}
                            placeholder={placeholderFN}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label style={{color:'white'}}>Last Name</label>
                          <Input
                            id='LN'
                            onChange={e=>setlastname(e.target.value)}
                            value={lastname}
                            type="text"
                            placeholder={placeholderLN}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup >
                          <label style={{color:'white'}} htmlFor="exampleInputEmail1" >
                            Email address
                          </label>
                          <Input placeholder={placeholderEmail} type="email" disabled />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label style={{color:'white'}}>About Me</label>
                          <Input
                            cols="80"
                            placeholder={placeholderAB}
                            onChange={e=>setabout(e.target.value)}
                            value={about}
                            rows="4"
                            id='AB'
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="3">
                        <FormGroup>
                          <label style={{color:'white'}}>Press to Upload Image</label>
                          <img style={{height:'50%',width:'50%'}} src={uploadIcon} alt="" ></img>
                          <Input
                            type="file"
                            onChange={e=>handleImage(e)}
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
              <Card className="card-user" style={{height:'645px'}}>
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                      <img
                        src={imgsrc}
                        style={{height:'400px'}}
                      />
                      <h2 className="title" style={{fontFamily:'Ubuntu',color:'white',marginTop:'5px'}}>{username}</h2>
                  </div>
                  <div className="card-description" style={{ color: 'white', fontSize: 16,fontFamily:'Ubuntu',marginLeft:'30px',color:'white'}}>
                      <Typography style={{marginLeft:'10px',fontFamily:'Ubuntu',color:'white'}} >{about}</Typography> 
                  </div>
                </CardBody>

              </Card>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }



