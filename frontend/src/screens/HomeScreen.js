import React from 'react';
import products from '../products';
import { Row, Col} from 'react-bootstrap';

 const HomeScreen = () => {
    return (
        <>
        <h1> Check out the latest in prep!</h1>
            <Row>
                {products.map(product=> (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    {product.name}
                    
                    </Col>


                ) )}

            </Row>
            
        </>
    )
}

export default HomeScreen;