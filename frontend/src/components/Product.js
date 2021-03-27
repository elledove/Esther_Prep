import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        //my is margin-y; gives margin on top and bottom. p is padding and rounded is for the border radius.
        <Card className='my-3 p-3 rounded'> 
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} /> 

        </a>

            
        </Card>
    )
}

export default Product
