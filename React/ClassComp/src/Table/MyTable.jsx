import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import TableContent from './TableContent';

class MyTable extends Component {
  render() {
    const { showData, handleEdit, handleDelete } = this.props;

    return (
      <>
        <Table bordered hover className='container'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Address</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          {showData.length > 0 ? ( 
            <TableContent
              showData={showData}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ) : (
            ""
          )}
        </Table>
      </>
    );
  }
}

export default MyTable;
