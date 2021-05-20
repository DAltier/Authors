import React from 'react';
import axios from 'axios';
import { Button } from '../styles/Style';


export default props => {
  const { authorId, successCallback } = props;


  const deleteAuthor =(e) => {
    axios.delete(`http://localhost:8000/api/authors/${authorId}`)
      .then(res => successCallback(authorId));
  }


  return (
    <Button onClick = { deleteAuthor }>Delete</Button>
  )
}