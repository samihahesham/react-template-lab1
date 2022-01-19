import React from "react";
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
class Footer extends React.Component {
    constructor() {      
        super();
    }

    render() {
        
        return (
            <>
                <div className="text-white footer bg-dark">
                    <div className="row col-12">
                        <div className="col-4"><h5>Get In Touch</h5>
                        <p>
                        <FontAwesomeIcon className="myicon" icon={faEnvelope}/><p>kr12@hotmail.com</p>
                        <p>
                        <FontAwesomeIcon className="myicon" icon={faPhoneSquare}/></p>717-555-1234</p>
                        </div>
                        <div className="col-4 text-center"><button className="btn btn-outline-light" > Contact Me </button></div>
                        <div className="col-4 text-end">
                         <p>
                        <FontAwesomeIcon className="myicon" icon={faLinkedin}/>
                        <FontAwesomeIcon className="myicon" icon={faTwitter}/>
                        <FontAwesomeIcon className="myicon" icon={faFacebook}/>
                        </p>
                        <p>copy right c 2019 KR</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;