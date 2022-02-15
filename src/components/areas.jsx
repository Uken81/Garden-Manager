import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import store from '../redux/store';

const Areas = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
    console.log('name: ', name);
  };

  const handleDispatch = () => {
    dispatch('name/nameAdded', { name });
    // dispatch({ type: 'name/nameAdded', payload: { name } });
  };

  const con = () => {
    console.log(name);
  };

  return (
    <div className="areas">
      <h1>Select Garden Area</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={handleDispatch}>test</button>
      <button onClick={con}>con</button>
      {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {Object.keys(usersGarden.areas).map((areaName, i) => (
          <Dropdown.Item onClick={handleClick} href={areaName} key={i}>
            {areaName}
          </Dropdown.Item>
        ))}
      </DropdownButton> */}
    </div>
  );
};

export default Areas;
