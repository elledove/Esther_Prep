import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        //my is margin-y; gives margin on top and bottom. p is padding and rounded is for the border radius.
        <Card className='my-3 p-3 rounded'> 
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} /> 
        </a>
        <Card.Body>
        <a href={`/product/${product._id}`}>
            <Card.Title as='div'>
                <strong> {product.name}</strong>

            </Card.Title>

        </a>
       < Card.Text as='div'> 
       <div className='my-3'>
        Rating: {product.rating} based on {product.numReviews} reviews
       </div>
       
       </Card.Text>


       <Card.Text as='h3'>${product.price} </Card.Text>

        </Card.Body>

            
        </Card>
    )
}

export default Product
