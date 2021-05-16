import React from 'react';
import "./progressTracker.css";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


function ProgressTracker() {
    return (
        <div>
            <h1 className="rainbow-text">Progress Tracker</h1>
            <hr/>
            <div className="manual">
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Manual</CardTitle>
                        <CardText>Enter the time intervals for specific major tasks you spent your time on, for today.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
            <div className="counter">
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Counted</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Enter the Task Name/Activity Name and start the timer and let the time be counted by itself.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default ProgressTracker;