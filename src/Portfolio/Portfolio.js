import React from "react";
import "./Portfolio.css"
class Portfolio extends React.Component {
    constructor() {
        super();
    }

    render() {
        let cards = [
            { cardTitle: "Web Design", color: "#959188" },
            { cardTitle: "Mobile Design", color: "#3d3d3d" },
            { cardTitle: "Logo Design", color: "#959188" },
            { cardTitle: "Web Application Development", color: "#3d3d3d" },
            { cardTitle: "Mobile Application Development", color: "#959188" },
            { cardTitle: "PWA Development", color: "#3d3d3d" },

        ];
        return (
            <>
                <h3 className="offset-1 p-3 text-portfolio">Portfolio</h3>
                <div className="container portfolio-cards">
                    {cards.map((item) => {
                        return (
                            
                                <div className="col-3 m-3" style={{ "background-color" :`${item.color}` }}>
                                    <div className="card" style={{ "background-color" :`${item.color}` }}>
                                        <div className="card-body"style={{ "background-color" :`${item.color}` }} >
                                            <h4 className="card-title" justify-content-center  style={{ "color" :"white" }}>{item.cardTitle}</h4>
                                          
                                        </div>
                                    </div>
                                </div>
                            
                        );
                    })}

                </div>
            </>
        );
    }
}

export default Portfolio;