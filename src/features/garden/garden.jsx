import { useState } from 'react';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { areaAdded } from './gardenSlice';
import { BsFillFilePlusFill, BsFillFileMinusFill } from 'react-icons/bs';
import Areas from '../areas/areas';

const Garden = () => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [newAreaText, setnewAreaText] = useState('');
  const [areaIsSelected, setAreaIsSelected] = useState(false);
  const [selectedAreaText, setSelectedAreaText] = useState('');

  const usersAreasList = useSelector((state) => state.garden.areas);

  const handleChange = (e) => setnewAreaText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(areaAdded(newAreaText));
    setnewAreaText('');
  };
  let testy;
  const handleClick = (e) => {
    e.preventDefault();
    setAreaIsSelected(true);
  };
  const handleSelect = (e) => {
    setSelectedAreaText(e);
  };

  const dropDown = Object.keys(usersAreasList).map((areaName) => (
    //Find a more unique replacement for the eventKey value
    <Dropdown.Item href={areaName} key={uniqid()} eventKey={areaName} onClick={handleClick}>
      {areaName}
    </Dropdown.Item>
  ));

  const back = () => {
    setAreaIsSelected(false);
  };

  function con() {
    console.log('selected area text: ', selectedAreaText);
    console.log('Area LIst: ', usersAreasList);
    console.log(usersAreasList[selectedAreaText]);
    console.log('etsty: ', testy);
  }

  return (
    <div className="garden">
      <button onClick={con}>con</button>
      <h2 onClick={back}>BACK</h2>
      {!areaIsSelected && (
        <div className="select-and-add-area">
          <h1>Select Garden Area</h1>
          <Dropdown>
            <DropdownButton id="dropdown-basic-button" title="Garden Areas" onSelect={handleSelect}>
              {dropDown}
            </DropdownButton>
          </Dropdown>
          <div className="add-area">
            {showForm && (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="area-form">
                  <Form.Control
                    name="area-form"
                    type="text"
                    placeholder="Enter New Area"
                    value={newAreaText}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
            {!showForm ? (
              <BsFillFilePlusFill onClick={() => setShowForm(true)} />
            ) : (
              <BsFillFileMinusFill onClick={() => setShowForm(false)} />
            )}
          </div>
        </div>
      )}
      {areaIsSelected && (
        <div className="areas">
          <Areas selectedAreaText={selectedAreaText} />
        </div>
      )}
    </div>
  );
};

export default Garden;
