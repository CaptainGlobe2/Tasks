
import { Button, Form, Modal, Table } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'

function App() {
const [userData,SetUserData] = useState({name:'',phoneNo:'',Email:'',Address:''});
const [tableShow,setTableShow] = useState(false);
const [showData,setShowData] = useState([]);
const [show,setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => {setValidationErrors({});setShow(true);}//to ensure that validation errors are cleared
const [isEditing,setIsEditing] = useState(false);
const [editingIndex,setEditingIndex] = useState(null);
const [validationErrors,setValidationErrors] = useState({});

const handleChange = (e) => {
  SetUserData({...userData,[e.target.name]:e.target.value});
  
}

const validateForm = () =>{
  let errors = {};
  if(!userData.name.trim()) errors.name = "Name is required";
  if(!userData.phoneNo.trim()) errors.phoneNo = "PhoneNo is required";
  if(!userData.Email.trim()) errors.Email = "Email is required";
  if(!userData.Address.trim()) errors.Address = "Address is required";
  // if (userData.phoneNo && !/^\d+$/.test(userData.phoneNo)) errors.phoneNo = 'Phone number must be numeric';
  if (!userData.phoneNo.trim()) {
    errors.phoneNo = 'Phone number is required';
  } else if (userData.phoneNo.length !== 10 || !/^\d+$/.test(userData.phoneNo)) {
    errors.phoneNo = 'Phone number must be 10 digits';}
  if (userData.Email && !/\S+@\S+\.\S+/.test(userData.Email)) errors.Email = 'Email is invalid';
  return errors;

}

const handleSave = () => {
  // setShowData((prevData) => [...prevData, { ...userData }]);
  // SetUserData({name:'',phoneNo:'',Email:'',Address:''})


  const errors = validateForm();
  if(Object.keys(errors).length>0){
    setValidationErrors(errors);
    return;
  }



  if(isEditing){
    const updatedData = [...showData];
    updatedData[editingIndex] = {...userData};
    setShowData(updatedData);
    setIsEditing(false);
    setEditingIndex(null);
    
  }else{
    setShowData((prevData) => [...prevData, { ...userData }]);
  }
  SetUserData({name:'',phoneNo:'',Email:'',Address:''});
  setTableShow(true);
  handleClose();
};

const handleEdit = (index) =>{
  handleShow();
  setIsEditing(true);
  setEditingIndex(index);
  SetUserData({name:showData[index].name,phoneNo:showData[index].phoneNo,Email:showData[index].Email,Address:showData[index].Address});
  
  
}

const handleDelete = (index) => {
  const afterDelete = showData.filter((_,deleteIndex)=>deleteIndex!==index);
  setShowData(afterDelete)
}

console.log(showData);

  return (
    <>
    <div className='container mt-5'>
     <Button variant='priamary' className='btn-primary mb-5' onClick={handleShow}>
      Open Form
     </Button>

     <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Fill The form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='validation'>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              placeholder='Enter the name'
              value={userData.name}
              onChange={handleChange}
              required
              isInvalid={!!validationErrors.name}
              ></Form.Control>
              <Form.Control.Feedback type='invalid'>{validationErrors.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='number'
              name='phoneNo'
              placeholder='Enter the phoneNumber'
              onChange={handleChange}
              value={userData.phoneNo}
              isInvalid={!!validationErrors.phoneNo}
              ></Form.Control>
              <Form.Control.Feedback type='invalid'>{validationErrors.phoneNo}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              name='Email'
              placeholder='Enter Your email'
              value={userData.Email}
              onChange={handleChange}
              isInvalid={!!validationErrors.Email}></Form.Control>
              <Form.Control.Feedback type='invalid'>{validationErrors.Email}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              name='Address'
              placeholder='Enter Your address'
              value={userData.Address}
              onChange={handleChange}
              isInvalid={!!validationErrors.Address}></Form.Control>
              <Form.Control.Feedback type='invalid'>{validationErrors.Address}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleSave}>
            {isEditing ? 'Save Edit Changes' : 'Save Changes'}
          </Button>
      </Modal.Footer>
     </Modal>


     <Table bordered hover className='container'>
     <thead>
       <tr>
       <th>
         No
       </th>
       <th>Name</th>
       <th>Phone Number</th>
       <th>Email Address</th>
       <th>Address</th>
       <th>Edit/Delete</th>
       </tr>
     </thead>


     {tableShow ?(
     
     
     <tbody>
       {showData.map((current,index) => (
        <>
         <tr key={index}>
         <td>{index+1}</td>
         <td>{current?.name}</td>
         <td>{current?.phoneNo}</td>
         <td>{current?.Email}</td>
         <td>{current?.Address}</td>
         <td><Button onClick={()=>handleEdit(index)}>Edit</Button><Button onClick={()=>handleDelete(index)}>Delete</Button></td> 
       </tr>
       </>
       
       
       ))}
       
     </tbody>
    )
    :
    ("")
    

     }
     </Table>

     </div>
    </>
  )
}

export default App
