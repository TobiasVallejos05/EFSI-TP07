import { Card, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Cards(props) {
    console.log(props.element)
    return (

        <Container className='p-3 text-center'>
            <Link to={`/product/${props.element.id}`}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ height:'32rem', width: '32rem' }}>
                        <Card.Img className='cardImg' style={{ height: '20rem', border: '3px' }} variant="top" src={props.element.thumbnail} />
                        <Card.Body>
                            <Card.Title>{props.element.title}</Card.Title>
                            <Card.Text>
                                {props.element.description}
                            </Card.Text>
                            <Card.Text>
                                ${props.element.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Link>
        </Container>

    )
}
export default Cards;


