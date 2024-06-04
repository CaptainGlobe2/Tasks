
import { Button, Form, Modal, Table } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'

function App() {
const [userData,SetUserData] = useState({name:'',phoneNo:'',Email:'',Address:''});
const [tableShow,setTableShow] = useState(false);
const [showData,setShowData] = useState([]);
const [show,setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [isEditing,setIsEditing] = useState(false);
const [editingIndex,setEditingIndex] = useState(null);

const handleChange = (e) => {
  SetUserData({...userData,[e.target.name]:e.target.value});
  
}

const handleSave = () => {
  // setShowData((prevData) => [...prevData, { ...userData }]);
  // SetUserData({name:'',phoneNo:'',Email:'',Address:''})
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
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              placeholder='enter the name'
              value={userData.name}
              onChange={handleChange}
              ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='number'
              name='phoneNo'
              placeholder='Enter the phoneNumber'
              onChange={handleChange}
              value={userData.phoneNo}
              ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              name='Email'
              placeholder='Enter Your email'
              value={userData.Email}
              onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              name='Address'
              placeholder='Enter Your address'
              value={userData.Address}
              onChange={handleChange}></Form.Control>
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


     {tableShow ?(
     
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
    </Table>)
    :
    ""

     }

     </div>
    </>
  )
}

export default App
