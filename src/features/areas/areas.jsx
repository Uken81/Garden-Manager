import { useState } from 'react';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { bedAdded } from '../garden/gardenSlice';

const Areas = (selectedAreaText) => {
  const dispatch = useDispatch();

  const areaTitle = selectedAreaText.selectedAreaText;

  const selectedArea = useSelector((state) => state.garden.areas[areaTitle]);
  const beds = selectedArea.beds;
  console.log(selectedArea, beds);

  const [showForm, setShowForm] = useState(false);
  const [newBedText, setNewBedText] = useState('');

  const con2 = () => {
    console.log('selected Area: ', selectedArea);
    console.log('beds: ', beds);
    console.log('new bed name: ', newBedText);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const handleChange = (e) => setNewBedText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bedAdded(newBedText));
    // setNewBedText('');
  };

  // const list = Object.values(selectedArea).map((areaName) => <li key={uniqid()}>{areaName}</li>);
  return (
    <div className="areas">
      <div className="area-container">
        <button onClick={con2}>con2</button>
        <h1 className="area-title">{areaTitle}</h1>
        <div className="add-bed">
          <Button variant="primary" onClick={handleClick}>
            Add New Section for {areaTitle}
          </Button>
          {showForm && (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Name new bed"
                  value={newBedText}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          )}
        </div>
        {beds.map((bed) => (
          <Card style={{ width: '18rem' }} key={uniqid()}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{bed.name}</Card.Title>

              <ListGroup variant="flush">
                {bed.produce.map((bed) => (
                  <ListGroup.Item key={uniqid()}>{bed}</ListGroup.Item>
                ))}
              </ListGroup>
              {/* <ul variant="flush">{produceItems}</ul> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Areas;
