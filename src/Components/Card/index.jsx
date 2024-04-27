/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';

function CardBook( {data} ) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.author}</Card.Subtitle>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Link href="#">{data.numPages}</Card.Link>
        <Card.Link href="#">{data.availability}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardBook;