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
    const[startTime, setStartTime] = React.useState();

    function showElapsedTime() {
        if(timerState) {
            setTimeElapsed(new Date().getTime() - startTime);
        }
    }

    function changeTimerState() {
        if(timerState) {
            setTimerState(false);
            setTimerText("Start Timer");
            setTimeElapsed(new Date().getTime() - startTime);
        } else {
            setTimerState(true);
            setTimerText("End Timer");
            setStartTime(new Date().getTime());
        }//console.log(timerState, timerText);
    }

    function submitTime() {
        if(timerState) {

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
                            <CardTitle tag="h5">Manual</CardTitle>
                            <CardSubtitle tag="h6">Enter the time intervals for specific major tasks you spent your time on, for today.</CardSubtitle>
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
                            <Button style={{ float:'right', color:'#7000da', backgroundColor: '#333', borderColor: '#333' }}>&#10004;</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="counter">
                    <Card style={{ padding: '10px', backgroundColor: '#7000da', borderColor: 'black' }}>
                        <CardBody>
                            <CardTitle tag="h5">Counted</CardTitle>
                            <CardSubtitle tag="h6">Enter the Task Name/Activity Name and start the timer and let the time be counted by itself.</CardSubtitle>
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
                                    <Button onClick={ changeTimerState } style={{ backgroundColor: '#7000da', borderColor: 'black' }}>
                                        { timerText }
                                    </Button>
                                    &nbsp;&nbsp;Started At :&nbsp;&nbsp;
                                    <span style={{fontWeight: 800, fontSize: '30px'}}>{ startTime }</span>
                                </div>
                                <div>
                                    <Button onClick={ showElapsedTime } style={{ backgroundColor: '#7000da', borderColor: 'black' }}>
                                        Show Elapsed Time
                                    </Button>
                                    &nbsp;&nbsp;Time Elapsed :&nbsp;&nbsp;
                                    <span style={{fontWeight: 800, fontSize: '30px'}}>{ elapsedTime }</span>
                                </div>
                            </Alert>
                            <Button onClick={ submitTime } style={{ float:'right', color:'#7000da', backgroundColor: '#333', borderColor: '#333' }}>&#10004;</Button>
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