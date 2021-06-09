import React from 'react';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/StudyComponent.css";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Link } from "react-router-dom";



const fadeInAnimation = keyframes`${fadeIn}`;
const FadyDiv = styled.div`
  animation: 2s ${fadeInAnimation};
`;


function StudyComponent(){
    return(
        <div className="justForUpperBorder">
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
        <div className="container">
            <div class="row align-items-start">
                <div class="col">
                <FadyDiv><h1 class="rainbow-text-SC">Study With Me</h1></FadyDiv>
                <FadyDiv><h1 class="rainbow-text-SC">Study With Me</h1></FadyDiv>
                <FadyDiv><h1 class="rainbow-text-SC">Study With Me</h1></FadyDiv>
                <FadyDiv><h1 class="rainbow-text-SC">Study With Me</h1></FadyDiv>
                <FadyDiv><h1 class="rainbow-text-SC">Study With Me</h1></FadyDiv>
                <FadyDiv><h1 class="rainbow-text-SC">Study With Me</h1></FadyDiv>
                </div>
                <div class="col">
                    <Card style={{ width: "100%", padding: '10px', backgroundColor: '#7000da', borderColor: 'black' }} className="card mb-3">
                        <CardImg top width="100%"  src="/images/study.jpg"/>
                        <CardBody style={{width: "18rem"}}>
                            <CardTitle style={{marginTop: "8px", marginLeft:"8px", color: "white"}} tag="h5">What even is Study With Me?</CardTitle>
                            <CardSubtitle style={{ marginLeft:"8px", color: "#FAF9F6"}} tag="h6" className="mb-2 text-muted">Don't worry, we got you!!</CardSubtitle>
                            <CardText style={{ marginLeft:"8px", color: "white"}} className="align-items-stretch d-flex">
                                Exam season is upon university and college students and it can be extremely difficult to remain motivated to study. To combat this lack of concentration surrounding studying, a growing number of students have turned to YouTube for motivation. Study with me videos have gained popularity as a way for students to get motivated and inspired.
                            </CardText>
                                
                            <a href='https://digitalalberta.com/study-with-me-youtube-gives-students-new-study-tools//'>
                                <button>
                                    Click Here to know More!
                             </button>
                             </a>
                             
                                 
                           
                        </CardBody>    
                    </Card>
                </div>
            </div>
                {/* <div className="Study" margin-top="50px">
                    <ReactPlayer controls width="480px" height="240px" url="https://www.youtube.com/watch?v=csCp0Wd2-40"></ReactPlayer>
                </div> */}
            <div>
                <h2>Some curated videos for you!</h2>
            </div>
            <div class="row">
                <div class="col-sm-8" >
                    <ReactPlayer controls width="480px" height="240px" url="https://www.youtube.com/watch?v=csCp0Wd2-40"></ReactPlayer>
                </div>
                <div class="col-sm-8" >
                <div class="cube"></div>
                    <ReactPlayer controls width="480px" height="240px" url="https://www.youtube.com/watch?v=1Cv0kCB59J4"></ReactPlayer>
                </div>
                <div class="col-sm-8" >
                    <div class="cube"></div>
                    <ReactPlayer controls width="480px" height="240px" url="https://www.youtube.com/watch?v=SJl1AV9uQbA"></ReactPlayer>
                </div>
                <div class="col-sm-8">
                    <ReactPlayer controls width="480px" height="240px" url="https://www.youtube.com/watch?v=dmDbesougG0"></ReactPlayer>
                </div>
                <div class="col-sm-8">
                    <ReactPlayer controls width="480px" height="240px" url="https://www.youtube.com/watch?v=Qe8q7Dnicew"></ReactPlayer>
                </div>
                <div class="col-sm-8">
                <div class="cube"></div>
                    <ReactPlayer controls width="480px" height="240px" url="https://www.youtube.com/watch?v=qND2ScWE1e4"></ReactPlayer>            
                    <div class="cube"></div>
                </div>
                <div class="col-sm-8">
                <div class="cube"></div>
                    <ReactPlayer controls width="480px" height="240px" url="https://www.youtube.com/watch?v=Y3NWLewVhpk"></ReactPlayer>         
                </div>
            </div>
        </div></div>
    );
}

export default StudyComponent;