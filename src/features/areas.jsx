import { useState } from 'react';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { areaAdded } from './gardenSlice';

const Areas = () => {
  const dispatch = useDispatch();
  const [areaText, setAreaText] = useState('');
  const areasList = useSelector((state) => state.garden.areas);

  const handleChange = (e) => setAreaText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({ type: 'area/areaAdded', payload: areaText });
    dispatch(areaAdded(areaText));
    setAreaText('');
  };

  // const areaName = useSelector((state) => state.area.areaName.areaText);
  // const testAddArea = () => {
  //   areaAdded(areaText);
  // };
  const dropDown = Object.keys(areasList).map((areaName) => (
    <Dropdown.Item href={areaName} key={uniqid()}>
      {areaName}
    </Dropdown.Item>
  ));
  return (
    <div className="areas">
      <h1>Select Garden Area</h1>
      {/* <button onClick={testAddArea}>testAddArea</button> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="area-form">
          <Form.Control
            name="area-form"
            type="text"
            placeholder="Enter New Area"
            value={areaText}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <DropdownButton id="dropdown-basic-button" title="Garden Areas">
        {dropDown}
      </DropdownButton>
    </div>
  );
};

export default Areas;
