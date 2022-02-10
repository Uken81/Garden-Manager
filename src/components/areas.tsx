import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { selectGardenObject, selectSelectedArea } from '../redux/selectors';
import { GardenObject } from '../redux/garden';

const Areas = () => {
  const usersGarden: GardenObject = useSelector(selectGardenObject);
  console.log(usersGarden);

  const dispatch = useDispatch();
  const selectArea = useSelector(selectSelectedArea);

  //Need to replace type any below with correct type.
  const handleClick = (event: any) => {
    event.preventDefault();
    dispatch(selectArea);
    console.log('test');
  };

  return (
    <div className="areas">
      <h1>Select Garden Area</h1>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {Object.keys(usersGarden.areas).map((areaName, i) => (
          <Dropdown.Item onClick={handleClick} href={areaName} key={i}>
            {areaName}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default Areas;
