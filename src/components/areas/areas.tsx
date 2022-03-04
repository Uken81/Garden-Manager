import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AreasProps } from '../../features/areasSlice';
// import uniqid from 'uniqid';
import { bedAdded } from '../../features/gardenSlice';
import './areas.scss';

const Areas: React.FC<AreasProps> = ({ setAreaIsSelected, selectedAreaText }) => {
  const dispatch = useDispatch();

  // const usersAreasList = useSelector((state: RootState) => state.garden.areas);

  const [showForm, setShowForm] = useState(false);
  const [newBedText, setNewBedText] = useState('');

  // const selectedArea: Area = useSelector(
  //   (state: RootState) => state.selectedArea.selectedAreaObject
  // );

  // const beds = selectedArea.beds;
  // const con2 = () => {
  //   console.log('selecetedArea: ', selectedArea);
  //   console.log('beds: ', beds);
  // };

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
    console.log('test submit');
  };

  const back = () => {
    setAreaIsSelected(false);
  };

  return (
    <div className="areas">
      <h2 onClick={back}>BACK</h2>
      <h1>{selectedAreaText}</h1>
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
      <div className="form-container">
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
    </div>
  );
};

export default Areas;
