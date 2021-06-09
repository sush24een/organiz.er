import React from "react";
import { UncontrolledCarousel, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/MainComponent.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadyDiv = styled.div`
  animation: 2s ${fadeInAnimation};
`;

const items = [
    {
        src: './images/to-do2.jpg',
        altText: 'To-Dos',
        caption: 'Management of Tasks, for the near Future.',
        key: 1,
    },
    {
        src: './images/timeManagement2.jpeg',
        altText: 'Productivity Tracker',
        caption: 'Assess your Time Management so far',
        key: 2
    },
    {
        src: './images/studyWithMe2.jpeg',
        altText: 'Study With Me',
        caption: 'Portal into a surrounding with Peace, Focus and Productive Aura.',
        key: 3
    }
];

function MainComponent() {
    return(
        <div className="mainComponent">
            <FadyDiv><h1 className="rainbow-text-App">ORGANIZ.ER</h1></FadyDiv>
            <div className="carousel">
                <UncontrolledCarousel className="MC-slides" items={items} />
            </div>
            
        </div>
    );
}

export default MainComponent;