import React from "react";
import Container from 'react-bootstrap/Container';
import { useContextState } from '../ContextState'

const Purchase = () => {
    
    let PurchasePrice = 0
    const { contextState, setContextState } = useContextState();

    for (let i = 0; i < contextState.purchase.list.length; i++) {
        PurchasePrice += contextState.purchase.list[i].price
    }

    return (
        <Container>        
            <h5>El precio total es: {PurchasePrice}</h5>
            <h5>La cantidad de productos en el carrito es: {contextState.purchase.list.length}</h5>
        </Container>
    );
}

export default Purchase;