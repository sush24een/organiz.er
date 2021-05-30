import React, { Component, useState } from 'react';
import '../CSS/To-dos.css';
import { Card, CardBody, CardTitle, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

function Todos() {
    class SplitText extends Component {
        render(){
            return(
                <span aria-label={this.props.copy} role={this.props.role}>
                    {this.props.copy.split("").map(function(char, index){
                        let style = {"animation-delay": (0.5 + index / 10) + "s"}
                        return <span
                        aria-hidden="true"
                        key={index}
                        style={style}>
                        {char}
                        </span>;
                    })}
                </span>
            );
        }
    }
    const [taskNumber, setTaskNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskTime, setTaskTime] = useState("");
    const [taskColor, setTaskColor] = useState("");
    const [taskDesc, setTaskDesc] = useState("");

    function delTask() {

    }

    function ediTask() {
        
    }

    function confirm() {
        setTaskNumber(taskNumber + 1);

    }

    return (
        <div className="todoComponent">
            <Modal isOpen={open} className="addTask modal-lg">
                <ModalHeader>
                    Add a Task (Enter the description neccessary)
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label className="inputLabelsTodo">Task Name</Label>
                            <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleDate">Date</Label>
                            <Input type="date" name="date"/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleTime">Time</Label>
                            <Input type="time" name="time"/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleColor">Color</Label>
                            <Input type="color" name="color"/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleText">Task Description</Label>
                            <Input type="textarea" name="text"/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="addTaskButt" color="success" onClick={ confirm }>Confirm</Button>
                    <Button className="addTaskButt" color="danger" onClick={ toggle }>Discard</Button>
                </ModalFooter>
            </Modal>
            <div className="todosDesc">
                <h1 className="rainbow-text-TD"><SplitText copy="To-dos" role="heading"/></h1>
                <div className="todoFormalityText">They're literally just To-Dos.<br/>Happy Doing :)</div>
            </div>
            <div className="todosHolder">
                <Card style={{ width: "100%", padding: '10px', backgroundColor: '#7000da', borderColor: 'black' }} className="card mb-3">
                    <CardBody style={{ padding: "8px"}}>
                        <CardTitle className="todoCardTitle" tag="h5">CRUD controls</CardTitle>
                        <Button className="todoButt" color="success" onClick={ toggle }>+</Button>
                        <Button className="todoButt" color="danger" onClick={ delTask }>-</Button>
                        <Button className="todoButt fa" color="warning" onClick={ ediTask }>&#xf040;</Button>
                        <hr color="black"/>
                        <CardTitle style={{marginTop: "8px", marginLeft:"8px", color: "white"}} tag="h5">Tasks</CardTitle>
                        <Alert className="todoAlert" color="secondary">
                            
                        </Alert>
                    </CardBody>    
                </Card>
            </div>
        </div>
    );
}

export default Todos;