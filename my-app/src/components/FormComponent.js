import Modal from '../../node_modules/react-modal';
import FormInfo from './FormInfo';
import React, { useState } from "react";


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
        backgroundColor       : '#52307c'      
      }
  };

    return(
        <>
            <button onClick={setModalIsOpenToTrue}>Login</button>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <FormInfo/>
            </Modal>
        </>
    )
}
export default ModalInFunctionalComponent;