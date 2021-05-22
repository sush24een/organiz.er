import React from 'react';
import "./ProductivityTracker.css";
import {
    Card, CardBody, CardTitle, CardSubtitle, Alert,
    Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import moment from 'moment';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadyDiv = styled.div`
  animation: 2s ${fadeInAnimation};
`;

function ProductivityTracker() {
    const [timerText, setTimerText] = React.useState("Start Timer");
    const [timerState, setTimerState] = React.useState(false);
    const [elapsedTime, setTimeElapsed] = React.useState("");
    const [startTime, setStartTime] = React.useState("");
    const [runningSubmission, setRunningSubmission] = React.useState(false);

    function showElapsedTime() {
        if(timerState) {
            setTimeElapsed(moment(startTime, "HH:mm:ss a").fromNow());
            document.getElementById('elapsedTime').style.visibility = 'visible';
        }
    }

    function changeTimerState() {
        if(timerState) {
            setTimerState(false);
            setRunningSubmission(false);
            setTimerText("Start Timer");
            var start = startTime.split(":");
            var end = moment().format('HH:mm:ss').split(":");
            var spent = [];
            for(var i=0; i<start.length; i++) {
                spent[i] = end[i] - start[i];
            }
            if(spent[0] < 0) spent[0] += 24;
            setTimeElapsed(spent[0] + " Hr, " + spent[1] + " Min, " + spent[2] + " Sec.");
            document.getElementById('elapsedTime').style.visibility = 'visible';
        } else {
            setTimerState(true);
            setTimerText("End Timer");
            setStartTime(moment().format('HH:mm:ss'));
            document.getElementById('startedAt').style.visibility = 'visible';
        }//console.log(timerState, timerText);
    }

    function submitManual(e) {
        e.preventDefault();
        //////////////////////////////////////////////////////////
    }

    function submitCounted(e) {
        e.preventDefault();
        if(timerState) {
            setRunningSubmission(true);
        }
        else if(startTime === "") {
            /*setRunningSubmission(true);
            document.getElementById('eraruto').innerHTML = 'No time counted *face palm*';*/
        }
        else {
            console.log('Submitted');
            

            setStartTime("");
            setTimeElapsed("");
        }
    }

    return (
        <div className="productivityComponent">
            <div class='light x1'></div>
            <div class='light x3'></div>
            <div class='light x4'></div>
            <div class='light x6'></div>
            <div class='light x7'></div>
            <div class='light x9'></div>
            <FadyDiv><h1 className="rainbow-text-PT">Productivity Tracker</h1></FadyDiv>
            <div>
                <div className="manual">
                    <Card style={{ padding: '10px', backgroundColor: '#7000da', borderColor: 'black' }}>
                        <CardBody>
                            <CardTitle tag="h4"><strong>Manual</strong></CardTitle>
                            <CardSubtitle className="textShouldBeVisible" tag="h6">
                                Enter the time intervals for specific major tasks you spent your time on, for today.
                            </CardSubtitle>
                            <Form onSubmit={e => { submitManual(e) }}>
                                <Alert style={{ marginTop: '10px', color:'#7000da', backgroundColor: '#333', borderColor: '#333' }}>
                                    <FormGroup>
                                        <Label for="exampleSelect">Task Done</Label>
                                        <Input type="select" required="required" name="select" id="exampleSelect">
                                            <option></option>
                                            <option value="St">Studied</option>
                                            <option value="E/Y">Exercised / Yoga</option>
                                            <option value="W">Worked</option>
                                            <option value="DR">Daily Routines</option>
                                            <option value="P">Played</option>
                                            <option value="Sl">Slept</option>
                                            <option value="M">Misc.</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">Description (optional) :</Label>
                                        <Input type="textarea" name="text" id="exampleText"/>
                                    </FormGroup>
                                    <span>
                                        <FormGroup>
                                            <label>FROM -&nbsp;&nbsp;</label>
                                            <input type="time" required />
                                            <label>&nbsp;&nbsp;, TO -&nbsp;&nbsp;</label>
                                            <input type="time" required />
                                        </FormGroup>
                                    </span>
                                </Alert>
                                <Button type="submit" className="submitButt" color="success">
                                    &#10004;
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
                <div className="counter">
                    <Card style={{ padding: '10px', backgroundColor: '#7000da', borderColor: 'black' }}>
                        <CardBody>
                            <CardTitle tag="h4"><strong>Counted</strong></CardTitle>
                            <CardSubtitle className="textShouldBeVisible" tag="h6">
                                Enter the Task Name/Activity Name and start the timer and let the time be counted by itself.
                            </CardSubtitle>
                            <Form>
                                <Alert style={{ marginTop: '10px', color:'#7000da', backgroundColor: '#333', borderColor: '#333' }}>
                                    <FormGroup>
                                        <Label for="exampleSelect">Task Done</Label>
                                        <Input required="required" type="select" name="select" id="exampleSelect">
                                        <option></option>
                                        <option value="St">Studying</option>
                                        <option value="E/Y">Exercise / Yoga</option>
                                        <option value="W">Working</option>
                                        <option value="DR">Daily Routines</option>
                                        <option value="P">Playing</option>
                                        <option value="Sl">Sleeping</option>
                                        <option value="M">Misc.</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">Description (optional) :</Label>
                                        <Input type="textarea" name="text" id="exampleText"/>
                                    </FormGroup>
                                    <div>
                                        <Button color="danger" className="textShouldBeVisible" onClick={ changeTimerState }>
                                            { timerText }
                                        </Button>
                                        <span id="startedAt" style={{ visibility: 'hidden' }}>
                                            &nbsp;&nbsp;Started At :&nbsp;&nbsp;
                                            <span style={{fontWeight: 800, fontSize: '30px'}}>
                                                { startTime }
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <Button color="danger" className="textShouldBeVisible" onClick={ showElapsedTime }>
                                            Started?
                                        </Button>
                                        <span id="elapsedTime" style={{ visibility: 'hidden' }}>
                                            &nbsp;&nbsp;&nbsp;
                                            <span style={{ fontWeight: 800, fontSize: '30px' }}>
                                                { elapsedTime }
                                            </span>
                                        </span>
                                    </div>
                                </Alert>
                                <Button className="submitButt" color="success" onClick={ submitCounted }>
                                    &#10004;
                                </Button>
                            </Form>
                            <Alert id="eraruto" color="danger" isOpen={ runningSubmission && timerState }>
                                Timer Still running. :(
                            </Alert>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProductivityTracker;