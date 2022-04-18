import "./Subscribe.css";
import Button from "../../components/Button";
import { useRef, useState } from "react";

const Subscribe = () => {
    const maleBtn = useRef();
    const femaleBtn = useRef();

    const [gender, setGender] = useState("male");

    const handleGender = (e) => {
        maleBtn.current.classList.remove("selected");
        femaleBtn.current.classList.remove("selected");
        e.target.classList.add("selected");
        setGender(e.target.value.toLowerCase());
    };

    return (
        <section className="subscribe section" id="subscribe">
            <h1 className="section-title">Subscribe now!</h1>
            <div className="sub-box">
                <form>
                    <div>
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Your email"
                            name="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="birth">Birth Date</label>
                        <input type="date" name="birth" id="birth" />
                    </div>
                    <div className="gender-div">
                        <input
                            type="hidden"
                            name="gender"
                            id="gender"
                            value={gender}
                        />
                        <input
                            type="button"
                            onClick={(e) => handleGender(e)}
                            value="Male"
                            className="selected"
                            ref={maleBtn}
                        />
                        <input
                            type="button"
                            onClick={(e) => handleGender(e)}
                            value="Female"
                            ref={femaleBtn}
                        />
                    </div>
                    <Button text="Submit" />
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
