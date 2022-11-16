import Carousel from "../components/Carousel"
import Products from "../components/Products"

const Home = () => {

    return (
        <>
            <Carousel></Carousel>
            <Products number={6}></Products>
        </>
    );
}

export default Home;