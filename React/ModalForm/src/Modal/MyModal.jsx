import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import MyForm from './Form/MyForm'


const MyModal = ({show,onHide,buttonClose,buttonSave,isEditing,userData,handleChange,validationErrors}) => {
  return (
    <>
       <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Fill The form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyForm userData={userData} handleChange={handleChange} validationErrors={validationErrors} ></MyForm>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={buttonClose}>
          Close
        </Button>
        <Button variant='primary' onClick={buttonSave}>
            {isEditing ? 'Save Edit Changes' : 'Save Changes'}
          </Button>
      </Modal.Footer>
     </Modal> 
    </>
  )
}

export default MyModal