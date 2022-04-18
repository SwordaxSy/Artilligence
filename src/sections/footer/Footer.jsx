import Logo from "../../assets/logo.png";
import GithubLogo from "../../assets/github-logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="brand">
                <img src={Logo} alt="Website Logo" />
                <div className="brand-text">
                    <h2>Artilligence</h2>
                    <b>
                        by <a href="https://swordax.netlify.app">Swordax</a>
                    </b>
                </div>
            </div>
            <a href="https://github.com/SwordaxSy/Artilligence">
                <img
                    src={GithubLogo}
                    alt="Github Logo"
                    className="github-logo"
                />
            </a>
        </footer>
    );
};

export default Footer;
