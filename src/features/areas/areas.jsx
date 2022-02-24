import { Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { bedAdded } from '../garden/gardenSlice';

const Areas = (selectedAreaText) => {
  const dispatch = useDispatch();

  const areaTitle = selectedAreaText.selectedAreaText;

  const selectedArea = useSelector((state) => state.garden.areas[areaTitle]);
  const beds = selectedArea.beds;
  const produceList = selectedArea.beds.produce;
  console.log(selectedArea, beds);

  const con2 = () => {
    console.log('selected Area: ', selectedArea);
    console.log('beds: ', beds);
    console.log('produceList: ', produceList);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(bedAdded('test'));
  };

  // const list = Object.values(selectedArea).map((areaName) => <li key={uniqid()}>{areaName}</li>);
  return (
    <div className="areas">
      <div className="area-container">
        <button onClick={con2}>con2</button>
        <h1 className="area-title">{areaTitle}</h1>
        {beds.map((bed) => (
          <Card style={{ width: '18rem' }} key={uniqid()}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{bed.name}</Card.Title>

              <ListGroup variant="flush">
                {bed.produce.map((bed) => (
                  <ListGroup.Item key={uniqid()}>{bed}</ListGroup.Item>
                ))}
              </ListGroup>
              {/* <ul variant="flush">{produceItems}</ul> */}
              <Button variant="primary" onClick={handleClick}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Areas;
