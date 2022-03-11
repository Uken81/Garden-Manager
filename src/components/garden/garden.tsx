import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { areaAdded, areaSelected } from '../../features/gardenSlice';
import { BsFillFilePlusFill, BsFillFileMinusFill } from 'react-icons/bs';
import { RootState } from '../../redux/store';

import './garden.styles.scss';
import capitalise from '../shared/capitalise';
import { Link } from 'react-router-dom';

const Garden: React.FC = () => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState<boolean>(false);
  const [newAreaText, setNewAreaText] = useState<string>('');

  const usersAreasList = useSelector((state: RootState) => state.garden.areas);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewAreaText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(areaAdded(newAreaText));
    setNewAreaText('');
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleSelect = (eventKey: string | null) => {
    dispatch(areaSelected(eventKey));
  };

  const dropDown = Object.keys(usersAreasList).map((areaName) => (
    <Dropdown.Item key={uniqid()} eventKey={areaName} onClick={handleClick}>
      <Link key={uniqid()} to={'/areas'}>
        {capitalise(areaName)}
      </Link>
    </Dropdown.Item>
  ));

  // function findSelectedArea(areas: AnyObject) {
  //   return areas.name === selectedAreaText;
  // }

  // useEffect(() => {
  //   if (selectedAreaText !== '') {
  //     findSelectedArea(usersAreasList);
  //     const selectedArea = usersAreasList.find((areas: any) => findSelectedArea(areas));
  //     console.log('testy: ', selectedArea);
  //     dispatch(areaSelected(selectedArea));
  //     setAreaIsSelected(true);
  //   }
  // }, [selectedAreaText]);

  function con() {
    console.log(usersAreasList);
  }

  return (
    <div className="garden">
      <button onClick={con}>con</button>
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
      <Link to={'/areas'}>
        <button>Areas Link</button>
      </Link>
    </div>
  );
};

export default Garden;
