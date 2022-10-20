import React, { useEffect, useState } from 'react';
import { GetAllProducts } from "../axios/axiosClient"
import { Row, Container } from 'react-bootstrap';
import Cards from './Cards';

function Products() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await GetAllProducts();
            setProduct(res.data.products);
        }
        fetchData();
    }, []);

    return (
             <Container>
                <br></br>
                   <h5>Productos destacados</h5>
                <Row md={3}>
                    {product && product.map(item => <Cards key={item.id} element={item}/>
                    )}
                </Row>
            </Container>
    );
}

export default Products;

