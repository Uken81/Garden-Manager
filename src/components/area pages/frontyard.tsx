import { FunctionComponent } from 'react';
// import { useSelector } from 'react-redux';
// import { GardenObject } from '../../redux/garden';
// import { selectSelectedArea } from '../../redux/selectors';

interface frontyardProps {}

const frontyard: FunctionComponent<frontyardProps> = () => {
  //   const usersGarden: GardenObject = useSelector(selectGardenObject);
  // const selectedArea: string = useSelector(selectSelectedArea);
  // const areaName = selectedArea;
  // console.log('selected area: ', areaName);

  return (
    <div className="frontyard">
      <div className="header">
        <h1></h1>
      </div>
    </div>
  );
};

export default frontyard;
