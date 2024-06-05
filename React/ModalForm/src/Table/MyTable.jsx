import React from 'react'
import { Table } from 'react-bootstrap'
import TableContent from './TableContent'

const MyTable = ({showData,handleEdit,handleDelete,tableShow}) => {
  return (
    <>
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
     
     <TableContent showData={showData} handleEdit={handleEdit} handleDelete={handleDelete}></TableContent>
     
    )
    :
    ("")
    

     }
     </Table>
    </>
  )
}

export default MyTable