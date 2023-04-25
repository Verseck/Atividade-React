import AllProducts from "./components/AllProducts";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Header from "./components/Header";
import Seila from "./components/phytoterapica";
import Details from "./components/Details";
import Footer from "./components/Footer";

function Home() {
    return(
        <div>
            <Header />
            <Nav />
            <Seila />
            <AllProducts />
            <Newsletter />
            <Details />
            <Footer />

            
        </div>
    )
}

export default Home;