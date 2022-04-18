import Robot from "../../assets/robot-waving.png";
import Button from "../../components/Button";
import "./Home.css";

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h1>Welcome to the world of Artilligence</h1>
                <p>
                    Lets learn artificial intelligence together and build
                    amazing stuff! Start with us!
                </p>
                <a href="#prices">
                    <Button text="Choose your deal!" />
                </a>
            </div>
            <img src={Robot} alt="Landing Page Image" />
        </section>
    );
};

export default Home;
