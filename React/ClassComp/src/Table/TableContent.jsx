import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class TableContent extends Component {
  render() {
    const { showData, handleEdit, handleDelete } = this.props;

    return (
      <>
        <tbody>
          {showData.map((current, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{current?.name}</td>
              <td>{current?.phoneNo}</td>
              <td>{current?.Email}</td>
              <td>{current?.Address}</td>
              <td>
                <Button onClick={() => handleEdit(index)}>Edit</Button>
                <Button onClick={() => handleDelete(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </>
    );
  }
}

TableContent.propTypes = {
  showData: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TableContent;
