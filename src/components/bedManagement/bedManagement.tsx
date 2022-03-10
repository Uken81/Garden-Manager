import { FunctionComponent } from 'react';
import { ListGroup } from 'react-bootstrap';

interface BedMangementProps {
  selectedBed: string;
}

const BedMangement: FunctionComponent<BedMangementProps> = () => {
  //   const selectedAreaText = useSelector((state: RootState) => state.garden[selectedAreaName].beds);
  return (
    <div className="bedManagement">
      <h1>Bed Management</h1>
      <div className="produce-list">
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default BedMangement;
