import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,LisGroup,Card,Button,Image} from 'react-bootstrap';
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
            <Image src={producx.image} alt={producx.name}/>  
            </Col>
            <Col md={3}>
            
            </Col>

            </Row>
        </>
    )
}

export default ProductScreen;
