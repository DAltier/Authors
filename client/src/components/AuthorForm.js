import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Form, FormGroup, Label, Input, RButton } from '../styles/Style';


export default props => {
  const { initialName, onSubmitProp } = props;
  const [ name, setName ] = useState(initialName);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ name });
  }


  return (
    <div>
      <Form onSubmit = { onSubmitHandler }>
        <FormGroup>
          <Label>Name</Label>
          <Input type = "text" value = { name } onChange = { e => { setName(e.target.value) } }/>
        </FormGroup>
        <RButton type = "submit">Submit</RButton>
      </Form>
      <RButton onClick = { ()=> navigate("/") }>Cancel</RButton>
    </div>
  )
}