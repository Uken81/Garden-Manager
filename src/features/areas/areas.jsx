import { useSelector } from 'react-redux';
import uniqid from 'uniqid';

const Areas = () => {
  const gardenAreas = useSelector((state) => state.garden.areas);
  console.log(gardenAreas);

  const list = Object.keys(gardenAreas).map((areaName) => <li key={uniqid()}>{areaName}</li>);
  return (
    <div className="areas">
      <div className="area-container">
        <h1 className="area-title">TEST</h1>
        {list}
      </div>
    </div>
  );
};

export default Areas;

// const dropDown = Object.keys(areasList).map((areaName) => (
//   <Dropdown.Item href={areaName} key={uniqid()}>
//     {areaName}
//   </Dropdown.Item>
// ));
