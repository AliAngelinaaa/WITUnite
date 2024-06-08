import React from 'react';
import harmain from '../images/harmain.jpg';
import nafisa from '../images/nafisa.jpg';
import '../css/mtc.css';


function Mtc() {

    return (
        <div>
            {/* <h2>Our Mission</h2>
                <div className= "bento-box">
                    <div class="big-box">fgsfg
                        <div>content</div>
                    </div>
                    <div class="smallBoxes">
                    <div class="smallbox">rtwert</div>
                    <div class="smallbox1">rtwert</div>
                    </div>
                </div> */}
            <h2>Board of Directors</h2>
            <div className="cardContainer">
                <div className="card">
                    <img src={harmain} alt="sample card img" className="HarmainImg" />
                    <div className="card-content">
                        <h2>Harmain Munir</h2>
                        <h3>Co-Founder</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="https://www.linkedin.com/in/harmain-munir-335511243/">LinkedIn</a>
                    </div>
                </div>
                <div className="card">
                    <img src={nafisa} alt="sample card img" />
                    <div className="card-content">
                        <h2>Nafisa Anzum</h2>
                        <h3>Co-Founder</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="https://www.linkedin.com/in/nafisa-anzum-aa8526216/">Linkedin</a>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mtc;