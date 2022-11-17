import React, { useState, useEffect } from 'react';
import { GetProductById } from "../axios/axiosClient"
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ActionTypes, useContextState } from '../contextState'

const InfoProduct = () => {

    const params = useParams();
    const [product, setProduct] = useState({});
    const { contextState, setContextState } = useContextState();

    useEffect(() => {
        async function fetchData() {
            const res = await GetProductById(params.Id);
            setProduct(res.data);
        }
        fetchData();
    }, []);

    const selectedProduct = contextState.purchase.find(item => item.id === product.id)

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

                        {selectedProduct ? 
                        (<Button variant="danger" onClick={() => setContextState({type: ActionTypes.SetPurchaseDeleteId, value: product.id})}>Eliminar del carrito</Button>): 
                        (<Button variant="success" onClick={() => setContextState({type: ActionTypes.SetPurchase, value: product})}>Agregar al carrito</Button>)}
                    </Card>
                </div>
        </Container>

    )
}
export default InfoProduct;


