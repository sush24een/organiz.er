import Modal from '../../node_modules/react-modal';
import FormInfo from './FormInfo';
import React, { useState } from "react";
import { Button } from 'reactstrap';


function ModalInFunctionalComponent (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    
    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            backgroundColor       : '#9f69d1'//BCCBFF     
        }
    };

    return(
        <>
            <Button color="primary" onClick={setModalIsOpenToTrue}>Login</Button>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <Button style={{ float: 'right' }} color="danger" onClick={setModalIsOpenToFalse}>x</Button>
                <FormInfo/>
            </Modal>
        </>
    )
}
export default ModalInFunctionalComponent;