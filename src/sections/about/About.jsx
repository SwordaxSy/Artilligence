import Robot from "../../assets/robot-reading.png";
import "./About.css";

const Line = ({ w, t }) => {
    return (
        <div
            className="about-line"
            style={{ width: `${w}px`, transform: `translateX(${t}px)` }}
        ></div>
    );
};

const lines = [];
for (let i = 0; i < 7; i++) {
    const width = Math.floor(Math.random() * (550 - 350 + 1) + 350);
    const transform = Math.floor(Math.random() * (80 + 80 + 1) - 80);
    lines.push({ width, transform });
}

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about-content">
                <p>
                    We at Artilligence help you get started with the science of
                    artificial intelligence easily and with the lowest prices!
                    <br />
                    <br />
                    If you commit with us, we will carry you till you land your
                    first job in the industry!
                    <br />
                    <br />
                    Artilligence cares about it's customers!
                </p>
                <div className="lines">
                    {lines.map(({ width, transform }, index) => {
                        return <Line w={width} t={transform} key={index} />;
                    })}
                </div>
            </div>
            <img src={Robot} alt="About Page Image" />
        </section>
    );
};

export default About;
