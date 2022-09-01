// import { Button } from "react-bootstrap";
// const AddEvent = ({ event }) => {
//   //const { name, description, game, time_start, time_end, ticket_price } = event;

//   return (
//   <div>
//     <form>
//       <Button></Button>
//     <h1>Add New Event</h1>
//     <input type='text' placeholder="Event Name"></input>
//     <br/>
//     <input type='text' placeholder="Brief Description of Event"></input>
//     <br/>
//     <input type='number' placeholder='Seats required'></input>
//     <br/>
//     <input type="text" placeholder="Image-URL"></input>
//     <br/>
//     <input type='date'></input>
//     <input type='time'></input>
//     <br></br>
    
//       </form>
//   </div>
//   );
// };

// export default AddEvent;

//seats available using :"seats_required"


import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


//const backgroundImage = new URL("./public/images/houses.jpg")

const AddEvent = () => {

  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    fetch('http://localhost:3000/events', {
      method: "POST",
      headers:
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
    setValues(defaultValues)
    setShow(true)
  }

  const handleClose = () => setShow(false);

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    comments: ''
  }

  const [values, setValues] = useState(defaultValues)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <section className='main-container'>
      <Container id='form-container' >
        <Form>

           <h1>Add New Event</h1>

          <Form.Group id='event-input' className="mb-3" controlId="">
            <Form.Control type="text" name="name" value={values.name} onChange={(e) => handleChange(e)} placeholder="Event Name" />
          </Form.Group>
          <Form.Group className='mb-3' controlId=''>
            <Form.Control type='text' name="description" value={values.description} onChange={(e) => handleChange(e)} placeholder='Description of the Event' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
          
            <Form.Control value={values.address} name="image" onChange={(e) => handleChange(e)} placeholder="Image-URL" />
          </Form.Group>

          <Form.Group>
              <Form.Control type='number' name='seats-required' onChange={(e) => handleChange(e)} placeholder='seats required'/>
          </Form.Group>
        
          <Row>
            <Col>
            <Form.Control type='date' name='date' onChange={(e) => handleChange(e)} placeholder='date' />
          </Col>
          <Col>
            <Form.Control type='time' name='time' onChange={(e) => handleChange(e)}/>
          </Col>
          </Row>
          <Form.Group>
          <Form.Control type='text' name='price' onChange={(e) => handleChange(e)} placeholder='Price'></Form.Control>
          </Form.Group>
          <Button variant="success" onClick={(e) => handleSubmit(e)} type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         Added to Events
        </Modal.Header>
      </Modal>
    </section>
  );
}

export default AddEvent;