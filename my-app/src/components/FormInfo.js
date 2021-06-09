import React from 'react';
import { Input, Label, Button } from 'reactstrap';

function FormInfo () {
    return (
        <>
            <br/>
            <Label style={{color:"white", marginLeft:"10px", fontSize:"20px"}}>
                First Name 
                <Input type="text" size="30" placeholder="First Name" style={{marginLeft:"5px"}}/>
            </Label>
            <br/>
            <Label style={{color:"white", marginLeft:"10px", fontSize:"20px"}}>
                Last Name 
                <Input type="text" size="30" placeholder="Last Name" style={{marginLeft:"5px"}}/>
            </Label>
            <br/>
            <Label style={{color:"white", marginLeft:"10px", fontSize:"20px"}}>
                Password
                <Input type="text" size="30" placeholder="Password" style={{marginLeft:"5px"}}/>
            </Label >
            <br/>
            <Button color="success" type="submit" className="submitUserInfo">Submit</Button>
        </>
    )

}

export default FormInfo;