import React, { useEffect, useState } from 'react';
import { GetProductById } from "../axios/axiosClient"
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function InfoProduct() {
    const params = useParams();
    console.log(params)
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await GetProductById(params.Id);
            setProduct(res.data);
        }
        fetchData();
    },[]);

console.log(product)
    return (
        
        <Container className='p-3 text-center'>
          
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ height: '500px', width: '500px'}}>
                        <Card.Img className='cardImg' style={{ height: '400px', border: '3px' }} variant="top" src={product && product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product && product.title}</Card.Title>
                            <Card.Text>
                                {product && product.description}
                            </Card.Text>
                            <Card.Text style={{fontWeight: '500'}}>
                                ${product && product.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
    
        </Container>

    )
}
export default InfoProduct;


