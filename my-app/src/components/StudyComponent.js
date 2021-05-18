import React from 'react';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./StudyComponent.css";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  


function StudyComponent(){
    return(
        
        <div className="container">
         <div class="row align-items-start">
            <div class="col">
            <h1>Study With Me</h1>
            <h1>Study With Me</h1>
            <h1>Study With Me</h1>
            <h1>Study With Me</h1>
            <h1>Study With Me</h1>
            <h1>Study With Me</h1>
            </div>
            <div class="col">
            <Card className="card mb-3">
                <CardImg top width="100%"  src="/images/study.jpg"  />
                    <CardBody style={{width: "18rem"}}>
                        <CardTitle style={{marginTop: "8px", marginLeft:"8px"}} tag="h5">What even is Study With Me?</CardTitle>
                            <CardSubtitle style={{ marginLeft:"8px"}} tag="h6" className="mb-2 text-muted">Don't worry, we got you!!</CardSubtitle>
                            <CardText style={{ marginLeft:"8px"}} className="align-items-stretch d-flex">Exam season is upon university and college students and it can be extremely 
                            difficult to remain motivated to study. To combat this lack of concentration surrounding studying, a growing number of students have 
                            turned to YouTube for motivation. Study with me videos have gained popularity as a way for students to get motivated and inspired.
                            </CardText>
                            <Button style={{textAlign:"center"}} color="link">Click here to know more!</Button>
                    </CardBody>
            </Card>
            </div>
        </div>
            <div className="Study" margin-top="50px">
                <ReactPlayer controls width="480px" height="240px" url="https://www.youtube.com/watch?v=csCp0Wd2-40"></ReactPlayer>
            </div>
        </div>
        
        
       
    )
}

export default StudyComponent;