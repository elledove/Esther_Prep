import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,ListGroup,Card,Button,Image} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

function ProductScreen({match}) {

const producx = products.find((oneProduct) => oneProduct._id === match.params.id)


    return (
        <>
            <h1>This is for the products dude!</h1>
            <h3>{producx.name}</h3>
            <Link className='btn btn-dark' to='/'>Take me back! </Link>

            <Row>
            <Col md={6}>
                {/* Fluid keeps the image inside of the container.matches the width of container */}
            <Image src={producx.image} alt={producx.name} fluid/>  
            </Col>

            
            <Col md={3}>

                <ListGroup >
                <ListGroup.Item>
                    <h2>{producx.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={producx.rating} text={`${producx.numReviews} reviews`}/>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h4>{producx.price}</h4>
                </ListGroup.Item>
              </ListGroup>
            
            </Col>

            </Row>
        </>
    )
}

export default ProductScreen;
