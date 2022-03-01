import React, { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { areaAdded } from '../../features/gardenSlice';
import { BsFillFilePlusFill, BsFillFileMinusFill } from 'react-icons/bs';
import { RootState } from '../../redux/store';
import { AnyObject } from 'immer/dist/internal';

import './garden.styles.scss';
import { AppProps, areaSelected } from '../../features/areasSlice';

const Garden: React.FC<AppProps> = ({
  setAreaIsSelected,
  selectedAreaText,
  setSelectedAreaText
}) => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [newAreaText, setNewAreaText] = useState('');
  // const [selectedArea, setSelectedArea] = useState(null);

  const usersAreasList = useSelector((state: RootState) => state.garden.areas);
  const selectedArea = useSelector((state: RootState) => state.selectedArea);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewAreaText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(areaAdded(newAreaText));
    setNewAreaText('');
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setAreaIsSelected(true);
  };

  const handleSelect = (e: React.SetStateAction<string | any>) => {
    setSelectedAreaText(e);
    console.log('setselected');
  };

  const dropDown = usersAreasList.map((area: any) => (
    //Find a more unique replacement for the eventKey value
    <Dropdown.Item key={uniqid()} eventKey={area.name} onClick={handleClick}>
      {area.name}
    </Dropdown.Item>
  ));

  function findSelectedArea(areas: AnyObject) {
    return areas.name === selectedAreaText;
  }

  useEffect(() => {
    findSelectedArea(usersAreasList);
    let selectedArea = usersAreasList.find((areas: any) => findSelectedArea(areas));
    console.log('selected area: ', selectedArea);
    // setSelectedArea(selectedArea);
    dispatch(areaSelected(selectedArea));
  }, [selectedAreaText]);

  const back = () => {
    setAreaIsSelected(false);
  };

  function con() {
    console.log('Area LIst: ', usersAreasList);
    usersAreasList.map((area: AnyObject) => console.log(area.name));
    console.log('selectedAreaText: ', selectedAreaText);
    console.log('selected area actual: ', selectedArea);
  }

  return (
    <div className="garden">
      <button onClick={con}>con</button>
      <h2 onClick={back}>BACK</h2>
      <h1>Select Garden Area</h1>
      <div className="select-and-add-area">
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
    </div>
  );
};

export default Garden;
