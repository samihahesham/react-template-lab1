import React from "react";
import "./skills.css";
class Skills extends React.Component {
    constructor() {
        super();


    }

    render() {
        
        let Focuses = [
            { Focus: "HTML", progress: 90,},
            { Focus: "CSS", progress: 90 },
            { Focus: "JavaScript", progress: 80 },
            { Focus: "React", progress: 80 },
            { Focus: "Photoshop", progress: 90 },
            { Focus: "Adobe XD", progress: 70 },
            { Focus: "Node.js", progress: 60 },
            { Focus: "WordPress", progress: 50 }
        ]
        let Focustyle = {
            width: '30%',
            color: "white",
        }
        return (
            <>
                <div className="skills">
                    <div className="text-skills">
                        <h2>Skills</h2>
                    </div>
                    <div className="row">
                        <div className="offset-2 col-8 text-center-skills">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>

                    <div className="row p-3">
                        <div className="offset-1 col-4 text-center-skills">
                            <h4>My Focus</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">UI/UX Design</li>
                                <li className="list-group-item">Responsive Design</li>
                                <li className="list-group-item">Web Design</li>
                                <li className="list-group-item">Mobile App Design</li>
                            </ul>
                        </div>

                        <div className="col-7 ">
                            {Focuses.map((item) => {
                                return (
                                    <div className="progress mt-2 ">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width:`${item.progress}%` }}
                                            aria-valuenow={item.progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ><span>{item.Focus}</span></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Skills