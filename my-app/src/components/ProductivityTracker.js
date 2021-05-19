import React from 'react';
import "./ProductivityTracker.css";
import {
    Card, CardBody, CardTitle, CardSubtitle, Alert,
    Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductivityTracker() {
    const [timerText, setTimerText] = React.useState("Start Timer");
    const [timerState, setTimerState] = React.useState(false);
    const [elapsedTime, setTimeElapsed] = React.useState();
    const [startTime, setStartTime] = React.useState();
    const [runningSubmission, setRunningSubmission] = React.useState(false);

    function showElapsedTime() {
        if(timerState) {
            setTimeElapsed(new Date().getTime() - startTime);
            document.getElementById('elapsedTime').style.visibility = 'visible';
        }
    }

    function changeTimerState() {
        if(timerState) {
            setTimerState(false);
            setRunningSubmission(false);
            setTimerText("Start Timer");
            setTimeElapsed(new Date().getTime() - startTime);
            document.getElementById('elapsedTime').style.visibility = 'visible';
        } else {
            setTimerState(true);
            setTimerText("End Timer");
            setStartTime(new Date().getTime());
            document.getElementById('startedAt').style.visibility = 'visible';
        }//console.log(timerState, timerText);
    }

    function submitCounter() {
        if(timerState) {
            setRunningSubmission(true);
        }
    }


    return (
        <div className="productivityComponent">
            <h1 className="rainbow-text-PT">Productivity Tracker</h1>
            <hr/>
            <div>
                <div className="manual">
                    <Card style={{ padding: '10px', backgroundColor: '#7000da', borderColor: 'black' }}>
                        <CardBody>
                            <CardTitle tag="h4"><strong>Manual</strong></CardTitle>
                            <CardSubtitle className="textShouldBeVisible" tag="h6">
                                Enter the time intervals for specific major tasks you spent your time on, for today.
                            </CardSubtitle>
                            <Alert style={{ marginTop: '10px', color:'#7000da', backgroundColor: '#333', borderColor: '#333' }}>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleSelect">Task Done</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                        <option>-- select --</option>
                                        <option>Studied</option>
                                        <option>Exercised / Yoga</option>
                                        <option>Worked</option>
                                        <option>Daily Routines</option>
                                        <option>Played</option>
                                        <option>Slept</option>
                                        <option>Misc.</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">Description (optional) :</Label>
                                        <Input type="textarea" name="text" id="exampleText"/>
                                    </FormGroup>
                                    <span>
                                        <FormGroup>
                                            <label for="appt">FROM -&nbsp;&nbsp;</label>
                                            <input type="time" id="appt" name="appt" required />
                                            <label for="appt">&nbsp;&nbsp;, TO -&nbsp;&nbsp;</label>
                                            <input type="time" id="appt" name="appt" required />
                                        </FormGroup>
                                    </span>
                                </Form>
                            </Alert>
                            <Button className="submitButt" color="success">
                                &#10004;
                            </Button>
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
                            <Alert style={{ marginTop: '10px', color:'#7000da', backgroundColor: '#333', borderColor: '#333' }}>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleSelect">Task Done</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                        <option>-- select --</option>
                                        <option>Studying</option>
                                        <option>Exercised / Yoga</option>
                                        <option>Worked</option>
                                        <option>Daily Routines</option>
                                        <option>Played</option>
                                        <option>Slept</option>
                                        <option>Misc.</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">Description (optional) :</Label>
                                        <Input type="textarea" name="text" id="exampleText"/>
                                    </FormGroup>
                                </Form>
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
                                        Show Elapsed Time
                                    </Button>
                                    <span id="elapsedTime" style={{ visibility: 'hidden' }}>
                                        &nbsp;&nbsp;Time Elapsed :&nbsp;&nbsp;
                                        <span style={{ fontWeight: 800, fontSize: '30px' }}>
                                            { elapsedTime }
                                        </span>
                                    </span>
                                </div>
                            </Alert>
                            <Button className="submitButt" color="success" onClick={ submitCounter }>
                                &#10004;
                            </Button>
                            <Alert color="danger" isOpen={ runningSubmission && timerState }>
                                Timer Still running. :(
                            </Alert>
                        </CardBody>
                    </Card>
                </div>
            </div>
            {/*<div className="AcessPT">
                <Button body inverse style={{ padding: '10px', color:'#white', backgroundColor: '#7000da', borderColor: '#333' }}>
                    Access Your Time Management So Far
                </Button>
            </div>*/
            }
        </div>
    );
}

export default ProductivityTracker;