import { useEffect, useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
function Header(props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigate = useNavigate(); //

    const handleQuote = () => {
        // Perform any logic here (e.g., form validation, authentication check)
        // console.log(routeLink);
        navigate(`/getQuote`); //
    };
    const handleContact = () => {
        navigate(`/contact`); //
    };
    return (
        <nav className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className="logo">
                <Link to="/">
                    <img src={props.logo} alt="logo" />
                </Link>
            </div>

            <div className="nav-links">
                <span key="home">
                    <Link to="/">Home</Link>
                </span>
                <span key="Services">
                    <Link to="/services">Services</Link>
                </span>
            </div>

            <div className="btn">
                <button className="support-button" onClick={handleContact}>
                    Contact Us
                </button>
                <button className="quote-nav" onClick={handleQuote}>
                    Get a Quote
                </button>
            </div>
        </nav>
    );
}

export default Header;
