import { Component } from 'react'
import './App.css'
import { Button } from 'react-bootstrap';
import MyModal from './Modal/MyModal';
import MyTable from './Table/MyTable';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData:{name:'',phoneNo:'',Email:'',Address:''},
      tableShow:false,
      showData:[],
      show:false,
      editingIndex:null,
      validationErrors:{},
    }
  }

  handleClose = () => {
    this.setState({
      userData: { name: '', phoneNo: '', Email: '', Address: '' },
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      validationErrors: {},
      show: true,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      userData: { ...prevState.userData, [name]: value },
    }));
  };

  validateForm = () => {
    const { userData } = this.state;
    let errors = {};
    if (!userData.name.trim()) errors.name = 'Name is required';
    if (!userData.phoneNo.trim()) errors.phoneNo = 'PhoneNo is required';
    if (!userData.Email.trim()) errors.Email = 'Email is required';
    if (!userData.Address.trim()) errors.Address = 'Address is required';
    if (!userData.phoneNo.trim()) {
      errors.phoneNo = 'Phone number is required';
    } else if (userData.phoneNo.length !== 10 || !/^\d+$/.test(userData.phoneNo)) {
      errors.phoneNo = 'Phone number must be 10 digits';
    }
    if (userData.Email && !/\S+@\S+\.\S+/.test(userData.Email)) errors.Email = 'Email is invalid';
    return errors;
  };

  handleSave = () => {
    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
      this.setState({ validationErrors: errors });
      return;
    }

    const { userData, isEditing, editingIndex, showData } = this.state;
    let updatedData;

    if (isEditing) {
      updatedData = [...showData];
      updatedData[editingIndex] = { ...userData };
      this.setState({ showData: updatedData, isEditing: false, editingIndex: null });
    } else {
      this.setState((prevState) => ({
        showData: [...prevState.showData, { ...userData }],
      }));
    }

    this.setState({
      userData: { name: '', phoneNo: '', Email: '', Address: '' },
      tableShow: true,
    });
    this.handleClose();
  };

  handleEdit = (index) => {
    const { showData } = this.state;
    this.handleShow();
    this.setState({
      isEditing: true,
      editingIndex: index,
      userData: { ...showData[index] },
    });
  };

  handleDelete = (index) => {
    const { showData } = this.state;
    const afterDelete = showData.filter((_, deleteIndex) => deleteIndex !== index);
    this.setState({ showData: afterDelete });
  };

  render() {
    const { show, userData, validationErrors, showData, tableShow, isEditing } = this.state;

    return (
      <>
        <div className='container mt-5'>
          <Button variant='primary' className='btn-primary mb-5' onClick={this.handleShow}>
            Open Form
          </Button>

          <MyModal
            show={show}
            onHide={this.handleClose}
            buttonClose={this.handleClose}
            buttonSave={this.handleSave}
            isEditing={isEditing}
            userData={userData}
            handleChange={this.handleChange}
            validationErrors={validationErrors}
          />

          <MyTable
            showData={showData}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            tableShow={tableShow}
          />
        </div>
      </>
    );
  }
}


export default App
