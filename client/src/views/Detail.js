import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
import { Button } from '../styles/Style'


export default props => {
  const [ author, setAuthor ] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${props.id}`)
      .then(res => setAuthor({ ...res.data })) 
  }, [])


  return (
    <div>
      <h1>{ author.name }</h1>
      <Button onClick = { (e) => navigate(`/`) }>Back</Button>
      <Button onClick = { (e) => navigate(`/${author._id}/edit`) }>Edit</Button>
      <DeleteButton authorId = { author._id } successCallback = { () => navigate("/") } />
    </div>
  )
}