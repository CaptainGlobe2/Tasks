
import { Button, Form, Modal, Table } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'
import MyModal from './Modal/MyModal';
import MyTable from './Table/MyTable';

function App() {
const [userData,SetUserData] = useState({name:'',phoneNo:'',Email:'',Address:''});
const [tableShow,setTableShow] = useState(false);
const [showData,setShowData] = useState([]);
const [show,setShow] = useState(false);
const handleClose = () => {SetUserData({name:'',phoneNo:'',Email:'',Address:''});setShow(false)};
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

     <MyModal show={show} onHide={handleClose} buttonClose={handleClose} buttonSave={handleSave} isEditing={isEditing} userData={userData} handleChange={handleChange} validationErrors={validationErrors}></MyModal>

     <MyTable showData={showData} handleEdit={handleEdit} handleDelete={handleDelete} tableShow={tableShow}></MyTable>


     

     </div>
    </>
  )
}

export default App
