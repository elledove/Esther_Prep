import React from 'react';
import products from '../products';
import { Row, Col} from 'react-bootstrap';
import Product from '../components/Product';


 const HomeScreen = () => {
    return (
        <>
        <h1> Check out the latest in prep!</h1>
            <Row>
                {products.map(product=> (
                    <Col sm={12} md={6} lg={4} xl={3} key ={product._id}>
                    
                    {/* <h3>{product.name}</h3> */}
                    <Product product={product}/>
                    
                    </Col>


                ) )}

            </Row>
            
        </>
    )
}

export default HomeScreen;