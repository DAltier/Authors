import React, { useState } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import { Link } from '@reach/router';


export default () => {
  const [ authors, setAuthors ] = useState([]);


  axios.get('http://localhost:8000/api/authors')
    .then(response => { setAuthors(response.data); },[])


  return(
    <div>
      <Link to = { "/new" }>Add an Author</Link>
      <h4>Authors:</h4>
      <AuthorList authors = { authors } />
    </div>
  )
}