import React from 'react';
import "./ProductivityTracker.css";
import { Card, CardBody, CardTitle, CardSubtitle, Alert, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
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
    const [task, setTask] = React.useState("");
    const [desc, setDesc] = React.useState("");

    function showElapsedTime() {
        if(timerState) {
            setTimeElapsed(moment(startTime, "HH:mm").fromNow());
            document.getElementById('elapsedTime').style.visibility = 'visible';
        }
    }

    function changeTimerState() {
        if(timerState) {
            setTimerState(false);
            setRunningSubmission(false);
            setTimerText("Start Timer");
            
            var start = startTime.split(":");
            var end = moment().format('HH:mm').split(":");
            var spent = [];
            for(var i=0; i<start.length; i++) {
                spent[i] = end[i] - start[i];
            } if(spent[1] < 0) {
                spent[1] += 60;
                spent[0] -= 1;
            } if(spent[0] < 0) spent[0] += 24;
            setTimeElapsed(spent[0] + ":" + spent[1]);
            document.getElementById('elapsedTime').style.visibility = 'visible';
        } else {
            setTimerState(true);
            setTimerText("End Timer");
            setStartTime(moment().format('HH:mm'));
            document.getElementById('startedAt').style.visibility = 'visible';
        }//console.log(timerState, timerText);
    }

    async function submitManual(e) {
        e.preventDefault();
        document.getElementsByClassName('submitButt')[0].innerHTML = "Submitting...";
        var start = startTime.split(":");
        var end = elapsedTime.split(":");
        var spent = [];
            for(var i=0; i<start.length; i++) {
                spent[i] = end[i] - start[i];
            } if(spent[1] < 0) {
                spent[1] += 60;
                spent[0] -= 1;
            } if(spent[0] < 0) spent[0] += 24;
        //console.log(task, desc, startTime, elapsedTime);
        var response = await fetch('/track', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: moment().format('l'),
                task:task,
                desc:desc,
                startTime:startTime,
                spentTime:spent[0] + ":" + spent[1]
            })
          });
          var data = await response.json();
          console.log(data);
          document.getElementsByClassName('submitButt')[0].innerHTML = "&#10004;";
          
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
                            <Form onSubmit={e => { submitManual(e)}}>
                                <Alert className="PTalerts">
                                    <FormGroup>
                                        <Label for="exampleSelect">Task Done</Label>
                                        <Input onChange={e => setTask(e.target.value)} type="select" required="required">
                                            <option></option>
                                            <option value="Study">Studied</option>
                                            <option value="Exercise / Yoga">Exercised / Yoga</option>
                                            <option value="Work">Worked</option>
                                            <option value="Daily Routines">Daily Routines</option>
                                            <option value="Play">Played</option>
                                            <option value="Sleep">Slept</option>
                                            <option value="Misc.">Misc.</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">Description (optional) :</Label>
                                        <Input onChange={e => setDesc(e.target.value)} type="textarea"/>
                                    </FormGroup>
                                    <span>
                                        <FormGroup>
                                            <label>FROM -&nbsp;&nbsp;</label>
                                            <input onChange={e => setStartTime(e.target.value)} type="time" required />
                                            <label>&nbsp;&nbsp;, TO -&nbsp;&nbsp;</label>
                                            <input onChange={e => setTimeElapsed(e.target.value)} type="time" required />
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
                                <Alert className="PTalerts">
                                    <FormGroup>
                                        <Label for="exampleSelect">Task Done</Label>
                                        <Input onChange={e => setTask(e.target.value)} required="required" type="select">
                                            <option></option>
                                            <option value="Study">Studying</option>
                                            <option value="Exercise / Yoga">Exercise / Yoga</option>
                                            <option value="Work">Working</option>
                                            <option value="Daily Routines">Daily Routines</option>
                                            <option value="Play">Playing</option>
                                            <option value="Sleep">Sleeping</option>
                                            <option value="Misc.">Misc.</option>
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
                            <Spinner type="grow" color="success"/>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProductivityTracker;