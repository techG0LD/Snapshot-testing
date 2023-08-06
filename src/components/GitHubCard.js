// import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function GithubCard(){
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://eu-images.contentstack.com/v3/assets/blt949ea8e16e463049/blt93445186c28dee8e/63945e7b10ec6026c7ebc2bb/E1RR80.jpg" />
        <Card.Body>
          <Card.Title>techG0LD</Card.Title>
          <Card.Text>
            Check out my github account!
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>I like building front-end</ListGroup.Item>
          <ListGroup.Item>I enjoy back-end</ListGroup.Item>
          <ListGroup.Item>my profession is full-stack</ListGroup.Item>
        </ListGroup>
        
      </Card>
    )
}