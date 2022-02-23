import { Button, Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';

const Areas = (selectedAreaText) => {
  const areaTitle = selectedAreaText.selectedAreaText;

  const selectedArea = useSelector((state) => state.garden.areas[areaTitle]);
  const beds = selectedArea.beds;
  const produceList = beds.produce;

  const produceItems = produceList.map((produce) => (
    <ListGroup.Item key={uniqid()}>{produce}</ListGroup.Item>
  ));

  const con2 = () => {
    console.log('selected Area: ', selectedArea);
    console.log('beds: ', beds);
    console.log('produce: ', produceList);
  };

  // const list = Object.values(selectedArea).map((areaName) => <li key={uniqid()}>{areaName}</li>);
  return (
    <div className="areas">
      <div className="area-container">
        <button onClick={con2}>con2</button>
        <h1 className="area-title">{areaTitle}</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{beds.name}</Card.Title>
            <ListGroup variant="flush">{produceItems}</ListGroup>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
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
