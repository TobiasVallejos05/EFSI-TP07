import React from "react";
import Container from 'react-bootstrap/Container';
import { useContextState } from '../contextState'

const Purchase = () => {
    
    let purchasePrice = 0
    const { contextState, setContextState } = useContextState();

    for (let i = 0; i < contextState.purchase.length; i++) {
        purchasePrice += contextState.purchase[i].price
    }

    return (
        <Container>
            <h5>Productos comprados</h5>
            <h6>La cantidad de productos en el carrito es: {contextState.purchase.length}</h6>
            <h6>El precio total es ${purchasePrice}</h6>
        </Container>
    );
}

export default Purchase;