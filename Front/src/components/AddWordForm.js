import React from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addWord } from "../Actions/wordAction";
import { useDispatch, useSelector } from "react-redux";  

const AddWordForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    word: "",
    meaning: "",
    gender: "",
    level: "",
    category:""
  });
  console.log(input)
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(addWord(input));
  };
      return (
        <div className='containerwordform'>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              German Word
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Word"  name="word" onChange={handleChange} />
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
             English Meaning
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Meaning" name="meaning" onChange={handleChange}/>
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Gendre
              </Form.Label>
              <Col sm={10} onChange={handleChange}>
                <Form.Check
                  type="radio"
                  label="masculine"
                  //name="formHorizontalRadios"
                  id="formHorizontalRadios"
                  name="gender"
                  value="masculine"
                />
                <Form.Check
                  type="radio"
                  label="feminine"
                 // name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  name="gender"
                  value="feminine"
                />
                <Form.Check
                  type="radio"
                  label="neuter"
                  //name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  name="gender"
                  value="neuter"
                  
                />
              </Col>
            </Form.Group>
          </fieldset>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Level
              </Form.Label>
              <Col sm={10} onChange={handleChange}>
                <Form.Check
                  type="radio"
                  label="A1"
                  id="formHorizontalRadios"
                  name="level"
                  value="A1"
                />
                <Form.Check
                  type="radio"
                  label="A2"
                  id="formHorizontalRadios2"
                  name="level"
                  value="A2"
                />
                <Form.Check
                  type="radio"
                  label="B1"
                  id="formHorizontalRadios3"
                  name="level"
                  value="B1"
                  
                />
                <Form.Check
                  type="radio"
                  label="B2"
                  id="formHorizontalRadios3"
                  name="level"
                  value="B2"
                  
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Category
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Category"  name="category" onChange={handleChange} />
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={handleAdd}>Add </Button>
            </Col>
          </Form.Group>
        </Form>
        </div>
      );
    }
    
    export default AddWordForm;