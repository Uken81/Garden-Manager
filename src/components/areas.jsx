import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { selectGardenObject } from '../redux/selectors';

const Areas = () => {
  const usersGarden = useSelector(selectGardenObject);
  console.log(usersGarden);

  return (
    <div className="areas">
      <h1>Select Garden Area</h1>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {Object.keys(usersGarden.areas).map((areaName, i) => (
          <Dropdown.Item href={areaName} key={i}>
            {areaName}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default Areas;
