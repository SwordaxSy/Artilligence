import logo from "../../assets/logo.png";
import "./Header.css";
import { useEffect, useRef } from "react";

const Header = () => {
    const headerRef = useRef();
    const logoRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", handleHeaderScroll);
        return () => {
            window.removeEventListener("scroll", handleHeaderScroll);
        };
    }, []);

    const handleNavClick = (e) => {
        const current = document.querySelector(".current");
        if (current) current.classList.remove("current");
        e.target.classList.add("current");
    };

    const handleHeaderScroll = () => {
        if (window.scrollY > 1) {
            headerRef.current.classList.add("moved");
        } else {
            headerRef.current.classList.remove("moved");
        }
    };

    return (
        <header ref={headerRef} id="home">
            <div className="logo" ref={logoRef}>
                <img src={logo} alt="Website Logo" className="header-logo" />
                <h1>Artilligence</h1>
            </div>
            <div className="nav-effect"></div>
            <nav>
                <ul>
                    <li>
                        <a href="#home" onClick={(e) => handleNavClick(e)}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => handleNavClick(e)}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" onClick={(e) => handleNavClick(e)}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#prices" onClick={(e) => handleNavClick(e)}>
                            Prices
                        </a>
                    </li>
                    <li>
                        <a href="#subscribe" onClick={(e) => handleNavClick(e)}>
                            Subscribe
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
