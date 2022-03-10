import React, { useState } from 'react';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { AreasProps, bedAdded } from '../../features/gardenSlice';
import { RootState } from '../../redux/store';
import capitalise from '../shared/capitalise';
import './areas.scss';

const Areas: React.FC<AreasProps> = ({ setAreaIsSelected, setShowBedManaagement }) => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [newBedText, setNewBedText] = useState('');
  const [selectedBed, setSelectedBed] = useState('');

  const selectedAreaText = useSelector((state: RootState) => state.garden.selectedAreaName);
  const selectedAreasBeds = useSelector(
    (state: RootState) => state.garden.areas[selectedAreaText as string].beds
  );

  const con2 = () => {
    console.log('selecetedArea: ', selectedAreasBeds);
    console.log('selecetedAreaText: ', selectedAreaText);
    console.log('selecetedBed: ', selectedBed);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(bedAdded(newBedText));
    setShowForm(false);
    setNewBedText('');
  };

  const back = () => {
    setAreaIsSelected(false);
    setShowBedManaagement(false);
  };

  const manageBed = (e: React.MouseEvent<HTMLElement>, bedName: string) => {
    e.preventDefault();
    setSelectedBed(bedName);
    setShowBedManaagement(true);
  };

  const gardenBedCard = Object.values(selectedAreasBeds).map((bed: any) => (
    <Card style={{ width: '18rem', minHeight: '12rem' }} key={uniqid()}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{capitalise(bed.name)}</Card.Title>
        <ListGroup variant="flush">
          {bed.produce.map((bed: any) => (
            <ListGroup.Item key={uniqid()}>{bed}</ListGroup.Item>
          ))}
        </ListGroup>
        <Button variant="primary" onClick={(e) => manageBed(e, bed.name)}>
          Manage Bed
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div className="areas">
      <h2 onClick={back}>BACK</h2>
      <button onClick={con2}>con2</button>
      <h1>{selectedAreaText}</h1>
      <div className="card-container">{gardenBedCard}</div>
      <div className="form-container">
        <Button variant="primary" onClick={handleClick}>
          Add New Bed
        </Button>
        {showForm && (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Name new bed"
                value={newBedText}
                onChange={(e) => setNewBedText(e.target.value)}
              />
            </Form.Group>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Areas;
