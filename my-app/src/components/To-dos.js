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
    const [toBeDeleted, setToBeDeleted] = useState([]);
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskTime, setTaskTime] = useState("");
    const [taskColor, setTaskColor] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskObj, settaskObj] = useState([]);
    const [target, setTarget] = useState(null);
    const [delButtState, setDelButtState] = useState(false);

    async function delTask() {
        if(!delButtState) {
            document.getElementsByClassName("cardForTodos")[0].style.backgroundColor = "grey";
            document.getElementsByClassName("todoCardTitle")[0].innerText = "CREFULLY, click to delete...";
            document.getElementsByClassName("todoButt")[0].style.visibility = "hidden";
            document.getElementsByClassName("todoButt")[1].innerText = "Confirm";
            document.getElementsByClassName("todoButt")[1].style.width = "120px";
            document.getElementsByClassName("todoButt")[2].style.visibility = "hidden";

        } else {
            for(var i=0 ; i<taskObj.length; i++) toBeDeleted[i].container = null;
            var response = await fetch('/deleter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    length: taskObj.length,
                    tasks: toBeDeleted
                })
            });
            var data = await response.json();
            console.log(data);
            document.getElementsByClassName("cardForTodos")[0].style.backgroundColor = "#7000da";
            document.getElementsByClassName("todoCardTitle")[0].innerText = "CRUD Controls";
            document.getElementsByClassName("todoButt")[0].style.visibility = "visible";
            document.getElementsByClassName("todoButt")[1].innerText = "-";
            document.getElementsByClassName("todoButt")[1].style.width = "60px";
            document.getElementsByClassName("todoButt")[2].style.visibility = "visible";
            shoTask();
        }
        setDelButtState(!delButtState);
    }

    function ediTask() {
        
    }

    async function showDesc(newTarget, obj) {
        if(delButtState) {
            for(var i=0; i<taskObj.length; i++) {
                if(toBeDeleted[i].id === obj._id) {
                    //console.log(i, toBeDeleted[i]);
                    toBeDeleted[i].delete = !toBeDeleted[i].delete;
                    toBeDeleted[i].container = newTarget;
                    break;
                }
            }
            for(i=0; i<taskObj.length; i++) {
                if(toBeDeleted[i].container != null) {
                    if(toBeDeleted[i].delete) toBeDeleted[i].container.style.backgroundImage = "linear-gradient(to left, rgba(0,0,0,1), rgba(255,0,0,1))";
                    else toBeDeleted[i].container.style.backgroundImage = "linear-gradient(to left , rgba(255,0,0,0), rgba(0,0,0,0))";
                }
            }
        } else {
            if(target !== newTarget) {
                if(target != null) target.innerText = target.innerText.split("\n")[0];
                newTarget.innerText = newTarget.innerText + "\n" + obj.taskDesc;
                setTarget(newTarget);
            } else {
                newTarget.innerText = newTarget.innerText.split("\n")[0];
                setTarget(null);
            }
        }
    }

    async function confirm() {
        console.log(taskName, taskDate, taskTime, taskColor, taskDesc);
        var response = await fetch('/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                taskName: taskName,
                taskDate: taskDate,
                taskTime: taskTime,
                taskColor: taskColor,
                taskDesc: taskDesc
            })
        });
        var data = await response.text();
        console.log(data);
        toggle();
        shoTask();
    }

    async function shoTask() {
        setToBeDeleted([]);
        var response = await fetch('/trackTasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        var data = await response.json();
        settaskObj(data);
    }
    
    //shoTask();
    return (
        <div className="todoComponent">
            <Modal isOpen={open} className="addTask modal-lg">
                <ModalHeader>Add a Task (Enter the description neccessary)</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label className="inputLabelsTodo">Task Name</Label>
                            <Input type="text" onChange={e => setTaskName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleDate">Date</Label>
                            <Input type="date" name="date" onChange={e => setTaskDate(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleTime">Time</Label>
                            <Input type="time" name="time" onChange={e => setTaskTime(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleColor">Color</Label>
                            <Input type="color" name="color" onChange={e => setTaskColor(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleText">Task Description</Label>
                            <Input type="textarea" name="text" onChange={e => setTaskDesc(e.target.value)}/>
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
                <Card className="cardForTodos">
                    <CardBody style={{ padding: "8px"}}>
                        <CardTitle className="todoCardTitle" tag="h5">CRUD controls</CardTitle>
                        <Button className="todoButt" color="success" onClick={ toggle }>+</Button>
                        <Button className="todoButt" color="danger" onClick={ delTask }>-</Button>
                        <Button className="todoButt fa" color="warning" onClick={ ediTask }>&#xf040;</Button>
                        <Button className="todoButt" color="info" onClick={ shoTask }>&#8635;</Button>
                        <hr color="black"/>
                        <CardTitle style={{marginTop: "8px", marginLeft:"8px", color: "white"}} tag="h5">Tasks</CardTitle>
                        {(taskObj.map (
                            obj => {
                                toBeDeleted.push({ id: obj._id, color: obj.taskColor, delete: false, container: null });
                                return (
                                    <Alert key={ obj._id } title={ delButtState ? "Click for Deletion" : "Click for Desciption" } style={{ backgroundColor: obj.taskColor }} onClick={e => showDesc(e.target, obj) } className="todoAlert">{ obj.taskName + ' | ' + obj.taskTime + ' | ' + obj.taskDate }</Alert>
                                )
                            }
                        ))}
                    </CardBody>    
                </Card>
            </div>
        </div>
    );
}

export default Todos;