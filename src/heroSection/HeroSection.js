import React from "react";
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class HeroSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="hero-section">
                    <div className="card text-white bg-dark ">
                        <img
                            className="card-img"
                            src={require('./background.jfif')}
                            alt="my Image"
                        ></img>
                        <div className="card-img-overlay col-3 ms-5 text-center ">
                            <h1 className="card-title ">Kattie Raed</h1>
                            <p className="card-text">
                                Web Developer and Designer
                            </p>
                            <button className="btn btn-outline-light col-8 ms-5" >Contact Me</button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default HeroSection;