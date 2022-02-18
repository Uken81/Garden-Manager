import { useState } from 'react';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { areaAdded } from './gardenSlice';
import { BsFillFilePlusFill, BsFillFileMinusFill } from 'react-icons/bs';
import Areas from '../areas/areas';

const Garden = () => {
  const dispatch = useDispatch();
  const [areaText, setAreaText] = useState('');
  const [areaIsSelected, setAreaIsSelected] = useState(false);
  // const [selectedArea, setSelctedArea] = useState(null);
  const [userAddingArea, setUserAddingArea] = useState(true);
  const [selectedAreaText, setSelectedAreaText] = useState('');
  const areasList = useSelector((state) => state.garden.areas);

  const handleChange = (e) => setAreaText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(areaAdded(areaText));
    setAreaText('');
  };

  const handleClick = (e) => {
    e.preventDefault();
    setAreaIsSelected(true);
  };

  const dropDown = Object.keys(areasList).map((areaName) => (
    //Find a more unique replacement for the eventKey value
    <Dropdown.Item href={areaName} key={uniqid()} onClick={handleClick} eventKey={areaName}>
      {areaName}
    </Dropdown.Item>
  ));

  const showForm = () => {
    setUserAddingArea(true);
  };

  const hideForm = () => {
    setUserAddingArea(false);
  };

  const back = () => {
    setAreaIsSelected(false);
  };

  const con = (e) => {
    setSelectedAreaText(e);
    console.log(e);
    console.log(selectedAreaText);
  };

  return (
    <div className="garden">
      <h2 onClick={back}>BACK</h2>
      {!areaIsSelected && (
        <div className="select-and-add-area">
          <h1>Select Garden Area</h1>
          <DropdownButton id="dropdown-basic-button" title="Garden Areas" onSelect={con}>
            {dropDown}
          </DropdownButton>
          <div className="add-area">
            {userAddingArea && (
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
            )}
            {!userAddingArea ? (
              <BsFillFilePlusFill onClick={showForm} />
            ) : (
              <BsFillFileMinusFill onClick={hideForm} />
            )}
          </div>
        </div>
      )}
      {areaIsSelected && (
        <div className="areas">
          <Areas />
        </div>
      )}
    </div>
  );
};

export default Garden;
