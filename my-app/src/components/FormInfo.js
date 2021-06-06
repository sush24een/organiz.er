import React from 'react'

function FormInfo () {

        return (
            <>
            <br></br>
             <label style={{color:"white", marginLeft:"10px"}}>
                First Name 
                <input type="text" size="30" placeholder="First Name" style={{marginLeft:"5px"}}/>
            </label>
            <br></br>
            <label style={{color:"white", marginLeft:"10px"}}>
                Last Name 
                <input type="text" size="30" placeholder="Last Name" style={{marginLeft:"5px"}}/>
            </label>
            <br></br>
            <label style={{color:"white", marginLeft:"10px"}}>
                Password
                <input type="text" size="30" placeholder="Password" style={{marginLeft:"12px"}}/>
            </label>
            <br></br>
                <input type="submit" value="Submit" />
            </>
        )

}

export default FormInfo