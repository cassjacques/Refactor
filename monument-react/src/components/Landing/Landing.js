import LandingCSS from '../Landing/Landing.css';
import Header from '../Header/Header';
import Archive from '../Archive/Archive';
import About from '../About';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact';

const Landing = () => {
    return (
        <>
            <Header />
            <Archive />
            <About />
            <Gallery />
            <Contact />
        </>
    );
};

export default Landing;