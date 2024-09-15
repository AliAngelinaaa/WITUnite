import React from 'react';
import harmain from '../images/harmain.jpg';
import nafisa from '../images/nafisa.jpg';
import sabina from '../images/sabina.jpg';
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
            <h2 class="board-heading">Board of Directors</h2>
            <div className="cardContainer">
                <div className="card">
                    <img src={harmain} alt="picture of harmain" className="HarmainImg" />
                    <div className="card-content">
                        <h2>Harmain Munir</h2>
                        <h3>Co-Founder</h3>
                        <p>Class of 2025 <br />Harmain is a Computer Science undergraduate at CUNY Brooklyn College, a software engineering fellow at CUNY Tech Prep, and a former intern at HealthyCUNY. She has also served as a Computer Science teaching assistant at Girls Who Code and participated in the AT&T Technology Academy. As the Co-Founder of WITUnite, her mission is to build a tech community that empowers young women to pursue their dream careers in tech, providing support, mentorship, and resources to help them excel. </p>
                        <a href="https://www.linkedin.com/in/harmain-munir-335511243/">LinkedIn</a>
                    </div>
                </div>
                <div className="card">
                    <img src={nafisa} alt="picture of nafisa" />
                    <div className="card-content">
                        <h2>Nafisa Anzum</h2>
                        <h3>Co-Founder/Head of Product</h3>
                        <p>Class of 2024 <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="https://www.linkedin.com/in/nafisa-anzum-aa8526216/">Linkedin</a>

                    </div>
                </div>
                <div className="card">
                    <img src={sabina} alt="sample card img" />
                    <div className="card-content">
                        <h2>Sabina Ismailova</h2>
                        <h3>Head of Tech</h3>
                        <p>Class of 2024 <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="https://www.linkedin.com/in/nafisa-anzum-aa8526216/">Linkedin</a>

                    </div>
                </div>
            </div>


            <br />

            <h2>WITU Ambassadors</h2>
            <div class="ambassadors-container">
                <div class="ambassador-card">
                    {/* <img src="ambassador1.jpg" alt="Ambassador 1" class="ambassador-photo"> */}
                        <h3 class="ambassador-name">Jennifer Perez</h3>
                        <p class="ambassador-title">Community Leader</p>
                        <p class="ambassador-bio">Jennifer is a current sophomore studying computer science at Brooklyn College. She has previously served as the marketing intern at Varon Consulting and as an engineering intern at Teladoc Health. As a WITU ambassador, she looks forward to providing help and support in your career journey as well as the latest internships and events to attend. What she lacks in technical skill, she makes up with her know-how of career-related events beneficial for students to attend and expand their knowledge. Come and join Jennifer as you both embark your career journey</p>
                </div>
{/* 
                <div class="ambassador-card">
                    <img src="ambassador2.jpg" alt="Ambassador 2" class="ambassador-photo">
                        <h3 class="ambassador-name">John Smith</h3>
                        <p class="ambassador-title">Technical Mentor</p>
                        <p class="ambassador-bio">John loves mentoring young engineers and has been helping developers achieve their goals for over a decade.</p>
                </div> */}

            </div>

        </div>
    )
}
export default Mtc;