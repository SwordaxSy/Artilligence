import PlayButton from "../../assets/video-player.png";
import Certificate from "../../assets/certificate.png";
import Meeting from "../../assets/meeting.png";
import Internship from "../../assets/internship.png";
import Intelligence from "../../assets/intelligence.png";
import "./Services.css";

const Services = () => {
    const data = [
        {
            image: PlayButton,
            text: "Daily course videos",
            dir: "top",
            top: 50,
            left: 100,
        },
        {
            image: Certificate,
            text: "Completion certificates",
            dir: "top",
            top: 0,
            left: 370,
        },
        {
            image: Meeting,
            text: "Guiding sessions",
            dir: "top",
            top: 50,
            left: 680,
        },
        {
            image: Intelligence,
            text: "Daily practice challenges",
            dir: "left",
            top: 250,
            left: 0,
        },
        {
            image: Internship,
            text: "Internship training",
            dir: "bottom",
            top: 220,
            left: 440,
        },
    ];

    return (
        <section className="services section" id="services">
            <h1 className="section-title">We serve you</h1>
            <div className="services-container">
                {data.map((div, index) => {
                    return (
                        <div
                            className={div.dir}
                            style={{
                                top: `${div.top}px`,
                                left: `${div.left}px`,
                                flexDirection:
                                    div.dir == "bottom"
                                        ? "column-reverse"
                                        : div.dir == "left"
                                        ? "row"
                                        : "column",
                            }}
                            key={index}
                        >
                            <img src={div.image} alt={div.image} />
                            <p
                                style={{
                                    marginTop: div.dir == "top" ? "20px" : "",
                                    marginBottom:
                                        div.dir == "bottom" ? "20px" : "",
                                    marginLeft: div.dir == "left" ? "20px" : "",
                                }}
                            >
                                {div.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
