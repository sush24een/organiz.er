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
    const [toBeEdited, setToBeEdited] = useState(null);
    const [toBeDeleted, setToBeDeleted] = useState([]);
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskTime, setTaskTime] = useState("");
    const [taskColor, setTaskColor] = useState("#9f69d1");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskObj, settaskObj] = useState([]);
    const [target, setTarget] = useState(null);
    const [delButtState, setDelButtState] = useState(false);
    const [editTaskState, setEditTaskState] = useState(false);

    async function delTask() {
        if(target != null) target.innerText = target.innerText.split("\n")[0];
        if(!delButtState) {
            document.getElementsByClassName("cardForTodos")[0].style.backgroundColor = "red";
            document.getElementsByClassName("todoCardTitle")[0].innerText = "CAREFULLY, click to delete...";
            document.getElementsByClassName("todoButt")[0].style.visibility = "hidden";
            document.getElementsByClassName("todoButt")[1].innerText = "Confirm";
            document.getElementsByClassName("todoButt")[1].style.width = "120px";
            document.getElementsByClassName("todoButt")[2].style.visibility = "hidden";
            document.getElementsByClassName("todoButt")[3].style.visibility = "hidden";
        } else {
            for(var i=0; i<taskObj.length; i++) toBeDeleted[i].container = null;
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
            document.getElementsByClassName("cardForTodos")[0].style.backgroundColor = "#9f69d1";
            document.getElementsByClassName("todoCardTitle")[0].innerText = "CRUD Controls";
            document.getElementsByClassName("todoButt")[0].style.visibility = "visible";
            document.getElementsByClassName("todoButt")[1].innerText = "-";
            document.getElementsByClassName("todoButt")[1].style.width = "60px";
            document.getElementsByClassName("todoButt")[2].style.visibility = "visible";
            document.getElementsByClassName("todoButt")[3].style.visibility = "visible";
            shoTask();
        }
        setDelButtState(!delButtState);
    }
    
    async function showDesc(newTarget, obj) {
        if(editTaskState) {
            if(target === newTarget) {
                if(target != null) target.style.backgroundImage = "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))";
                setTarget(null);
                setToBeEdited(null);
            }
            else{
                setToBeEdited(obj);
                if(target != null) target.style.backgroundImage = "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))";
                setTarget(newTarget);
                newTarget.style.backgroundImage = "linear-gradient(to left, rgba(0,0,0,1), rgba(250,255,0,1))";
            }
        } else if(delButtState) {
            for(var i=0; i<taskObj.length; i++) {
                if(toBeDeleted[i].id === obj._id) {
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
        if(editTaskState) {
            toggle();
            var response = await fetch('/editTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taskName: taskName,
                    taskDate: taskDate,
                    taskTime: taskTime,
                    taskColor: taskColor,
                    taskDesc: taskDesc,
                    task: toBeEdited
                })
            });
            var data = await response.json();
            console.log(data);
            shoTask();
            setTimeout(() => {
                target.style.backgroundImage = "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))";
                target.innerText = taskName + " | " + taskTime + " | " + taskDate;
                target.style.backgroundColor = taskColor;
                document.getElementsByClassName("cardForTodos")[0].style.backgroundColor = "#9f69d1";
                document.getElementsByClassName("todoCardTitle")[0].innerText = "CRUD Controls";
                document.getElementsByClassName("todoButt")[0].style.visibility = "visible";
                document.getElementsByClassName("todoButt")[2].style.width = "60px";
                document.getElementsByClassName("todoButt")[1].style.visibility = "visible";
                document.getElementsByClassName("todoButt")[3].style.visibility = "visible";
                shoTask();
            }, 1000);
            setEditTaskState(false);
        }
        else {
            document.getElementsByClassName("cardForTodos")[0].style.backgroundColor = "green";
            response = await fetch('/todos', {
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
            data = await response.text();
            console.log(data);
            toggle();
            shoTask();
            setTimeout(() => {
                shoTask();
                document.getElementsByClassName("cardForTodos")[0].style.backgroundColor = "#9f69d1";
                document.getElementsByClassName("todoCardTitle")[0].innerText = "CRUD Controls";
            }, 1000);
        }
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
        setTarget(null);
        setTaskName("");
        setTaskDate("");
        setTaskTime("");
        setTaskColor("#9f69d1");
        setTaskDesc("");
    }

    function ediTask() {
        if(target != null) target.innerText = target.innerText.split("\n")[0];
        if(!editTaskState) {
            document.getElementsByClassName("cardForTodos")[0].style.backgroundColor = "yellow";
            document.getElementsByClassName("todoCardTitle")[0].innerText = "Select the TASK to be edited";
            document.getElementsByClassName("todoButt")[0].style.visibility = "hidden";
            document.getElementsByClassName("todoButt")[2].style.width = "120px";
            document.getElementsByClassName("todoButt")[1].style.visibility = "hidden";
            document.getElementsByClassName("todoButt")[3].style.visibility = "hidden";
            setEditTaskState(true);
        }
        else {
            if(toBeEdited != null) {
                toggle();
                setTaskName(toBeEdited.taskName);
                setTaskDate(toBeEdited.taskDate);
                setTaskTime(toBeEdited.taskTime);
                setTaskColor(toBeEdited.taskColor);
                setTaskDesc(toBeEdited.taskDesc);
            }
            else {
                setEditTaskState(false);
                document.getElementsByClassName("cardForTodos")[0].style.backgroundColor = "#9f69d1";
                document.getElementsByClassName("todoCardTitle")[0].innerText = "CRUD Controls";
                document.getElementsByClassName("todoButt")[0].style.visibility = "visible";
                document.getElementsByClassName("todoButt")[2].style.width = "60px";
                document.getElementsByClassName("todoButt")[1].style.visibility = "visible";
                document.getElementsByClassName("todoButt")[3].style.visibility = "visible";
            }
        }
        console.log(editTaskState);
    }
    
    return (
        <div className="todoComponent">
            <Modal isOpen={open} className="addTask modal-lg">
                <ModalHeader className="modalHeader">Add a Task (Enter the description neccessary)</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label className="inputLabelsTodo">Task Name</Label>
                            <Input value={taskName} type="text" onChange={e => setTaskName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleDate">Task Date</Label>
                            <Input value={taskDate} type="date" onChange={e => setTaskDate(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleTime">Task Time</Label>
                            <Input value={taskTime} type="time" onChange={e => setTaskTime(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleColor">Task Color</Label>
                            <Input value={taskColor} type="color" style={{ height: "35px" }} onChange={e => setTaskColor(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabelsTodo" for="exampleText">Task Description</Label>
                            <Input value={taskDesc} type="textarea" onChange={e => setTaskDesc(e.target.value)}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="addTaskButt" color="success" onClick={ confirm }>Confirm</Button>
                    <Button className="addTaskButt" color="danger" onClick={()=>{
                        toggle();
                        if(editTaskState) {
                            shoTask();
                            setEditTaskState(false);
                            if(target != null) target.style.backgroundImage = "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))";
                            document.getElementsByClassName("cardForTodos")[0].style.backgroundColor = "#9f69d1";
                            document.getElementsByClassName("todoCardTitle")[0].innerText = "CRUD Controls";
                            document.getElementsByClassName("todoButt")[0].style.visibility = "visible";
                            document.getElementsByClassName("todoButt")[2].style.width = "60px";
                            document.getElementsByClassName("todoButt")[1].style.visibility = "visible";
                            document.getElementsByClassName("todoButt")[3].style.visibility = "visible";
                        }

                    }}>Discard</Button>
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
                        <Button style={{ color: "green" }} className="todoButt" color="success" onClick={ toggle }>+</Button>
                        <Button style={{ color: "red" }} className="todoButt" color="danger" onClick={ delTask }>-</Button>
                        <Button style={{ color: "yellow" }} className="todoButt fa" color="warning" onClick={ ediTask }>&#xf040;</Button>
                        <Button style={{ color: "aqua" }} className="todoButt" color="info" onClick={ shoTask }>&#8635;</Button>
                        <hr color="black"/>
                        <CardTitle style={{marginTop: "8px", marginLeft:"8px", color: "white"}} tag="h5">Tasks</CardTitle>
                        {taskObj.map(obj => {
                            toBeDeleted.push({ id: obj._id, color: obj.taskColor, delete: false, container: null });
                            return (
                                <Alert key={ obj._id } title={ delButtState ? "Click for Deletion" : "Click for Desciption" } style={{ backgroundColor: obj.taskColor }} onClick={e => showDesc(e.target, obj)} className="todoAlert">{ obj.taskName + ' | ' + obj.taskTime + ' | ' + obj.taskDate }</Alert>
                            )
                        })}
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Todos;