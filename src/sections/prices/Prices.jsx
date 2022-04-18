import Tick from "../../assets/tick.png";
import "./Prices.css";

const Prices = () => {
    const data = [
        {
            category: "bronze",
            props: [
                "10 course videos a day",
                "3 practice challenges a day",
                "Completion certificate",
                "Public guide sessions",
            ],
            price: "14.99$",
            color: "#4B262C",
        },
        {
            category: "silver",
            props: [
                "25 course videos a day",
                "6 practice challenges a day",
                "Completion certificate",
                "Public guide sessions",
                "Internship training",
            ],
            price: "19.99$",
            color: "#777777",
        },
        {
            category: "golden",
            props: [
                "Unlimited course videos",
                "Unlimited practice challenges",
                "Certified completion certificates",
                "Private guide sessions",
                "Internship training",
            ],
            price: "24.99$",
            color: "#4F3A07",
        },
    ];

    return (
        <section className="prices section" id="prices">
            <h1 className="section-title">Choose your deal</h1>
            <div className="prices-wrapper">
                {data.map((offer, index) => {
                    return (
                        <div
                            className={offer.category + " offer"}
                            key={index}
                            style={{ backgroundColor: offer.color }}
                        >
                            <h2>{offer.category.toUpperCase()}</h2>
                            <div className="props">
                                {offer.props.map((prop, prop_index) => {
                                    return (
                                        <div className="prop" key={prop_index}>
                                            <img src={Tick} alt="Tick Mark" />
                                            <p>{prop}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="price">
                                <p>{offer.price}</p>
                                <small>per month</small>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Prices;
