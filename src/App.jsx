import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Prices from "./sections/prices/Prices";
import Subscribe from "./sections/subscribe/Subscribe";
import Footer from "./sections/footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Services />
            <Prices />
            <Subscribe />
            <Footer />
        </>
    );
};

export default App;
