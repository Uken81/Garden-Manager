import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AreasProps } from '../../features/areasSlice';
// import uniqid from 'uniqid';
// import { RootState } from '../../redux/store';
import { bedAdded } from '../../features/gardenSlice';
import { RootState } from '../../redux/store';
// import { RootState } from '../../redux/store';
import './areas.scss';

const Areas: React.FC<AreasProps> = ({ areaIsSelected, setAreaIsSelected }) => {
  const dispatch = useDispatch();

  // const areaTitle = selectedAreaText.selectedAreaText;

  // const usersAreasList = useSelector((state: RootState) => state.garden.areas);
  // const beds = selectedArea.beds;
  // console.log(selectedArea, beds);

  const [showForm, setShowForm] = useState(false);
  const [newBedText, setNewBedText] = useState('');

  const selectedArea = useSelector((state: RootState) => state.selectedArea);

  const con2 = () => {
    console.log('area Is Selected: ', areaIsSelected);
    console.log('Selected Area: ', selectedArea);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowForm(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewBedText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(bedAdded(newBedText));
    setShowForm(false);
    setNewBedText('');
  };

  const back = () => {
    setAreaIsSelected(false);
  };

  return (
    <div className="areas">
      <div className="form-container">
        <h2 onClick={back}>BACK</h2>
        <button onClick={con2}>con2</button>
        {/* <h1 className="area-title">{areaTitle}</h1> */}
        <Button variant="primary" onClick={handleClick}>
          Add New Section for
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
      <div className="card-container">
        {/* {beds.map((bed: { name: string; produce: string[] }) => (
          <Card style={{ width: '18rem', minHeight: '12rem' }} key={uniqid()}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{bed.name}</Card.Title>
              <ListGroup variant="flush">
                {bed.produce.map((bed) => (
                  <ListGroup.Item key={uniqid()}>{bed}</ListGroup.Item>
                ))}
              </ListGroup>
              <Button variant="primary">Manage Bed</Button>
            </Card.Body>
          </Card>
        ))} */}
      </div>
    </div>
  );
};

export default Areas;
