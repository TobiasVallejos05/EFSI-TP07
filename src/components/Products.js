import React, { useState, useEffect } from 'react';
import { GetAllProducts } from "../axios/axiosClient"
import { Row, Container } from 'react-bootstrap';
import Cards from './Cards';
import PropTypes from 'prop-types';

const Products = (props) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await GetAllProducts(props.number);
            setProduct(res.data.products);
        }
        fetchData();
    }, []);

    return (
        
        <Container>
        <br/>
        <h5>Productos destacados</h5>
            <Row md={3}>
                {product && product.map(item => <Cards key={item.id} element={item}/>)}
            </Row>
        </Container>
    );
}

Products.propTypes = {
    number: PropTypes.number.isRequired
}

export default Products;

