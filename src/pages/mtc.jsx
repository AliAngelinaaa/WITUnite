import React from 'react';
import harmain from '../images/harmain.jpg';
import nafisa from '../images/nafisa.jpg';
import sabina from '../images/sabina.jpg';
import jennifer from '../images/jennifer.png';
import '../css/mtc.css';

function Mtc() {
    return (
        <div>
            <section className="mtc-section">
                <div className="intro-container">
                    <h2 className="heading">Meet the Team</h2>
                    <p className="intro-paragraph">We're a small but dedicated team with big dreams. Our mission is to reach out to all CUNY campuses and empower women in tech. Through mentorship, resources, and community support, we're committed to helping every aspiring woman in technology achieve her goals.</p>
                </div>
            </section>

            <section className="mtc-section">
                <div className="intro-container">
                    <h2 className="heading">Our History</h2>
                    <p>Women in Tech Unite (WITU) was founded in November 2023 by 2 Brooklyn College students who recognized the need for a supportive community for women in technology. Since our inception, we've grown from a small group of friends to a thriving network spanning multiple CUNY campuses. As of September 2024, we have 177 members and 3 board members.</p>
                </div>
            </section>

            <h2 className="heading">Board of Directors</h2>
            <div className="cardContainer">
                <div className="card">
                    <img src={harmain} alt="Harmain Munir" className="HarmainImg" />
                    <div className="card-content">
                        <h2>Harmain Munir</h2>
                        <h3>Co-Founder</h3>
                        <p>Class of 2025 <br />Harmain is a Computer Science undergraduate at CUNY Brooklyn College, a software engineering fellow at CUNY Tech Prep, and a former intern at HealthyCUNY. She has also served as a Computer Science teaching assistant at Girls Who Code and participated in the AT&T Technology Academy. As the Co-Founder of WITUnite, her mission is to build a tech community that empowers young women to pursue their dream careers in tech, providing support, mentorship, and resources to help them excel.</p>
                        <a href="https://www.linkedin.com/in/harmain-munir-335511243/">LinkedIn</a>
                    </div>
                </div>
                <div className="card">
                    <img src={nafisa} alt="Nafisa Anzum" />
                    <div className="card-content">
                        <h2>Nafisa Anzum</h2>
                        <h3>Co-Founder</h3>
                        <p>Class of 2024 <br />Nafisa Anzum is a Computer Science graduate from Brooklyn College, having completed her degree in just three years. She is currently a Service Recovery Analyst at HealthFirst and a co-founder of WIT Unite, a community initiative dedicated to supporting CUNY students in tech. Through WIT Unite, Nafisa aims to empower and inspire young women in tech by providing valuable resources, mentorship, and a supportive network to help them succeed in their careers.</p>
                        <a href="https://www.linkedin.com/in/nafisa-anzum-aa8526216/">LinkedIn</a>
                    </div>
                </div>
                <div className="card">
                    <img src={sabina} alt="Sabina Ismailova" />
                    <div className="card-content">
                        <h2>Sabina Ismailova</h2>
                        <h3>Head of Tech</h3>
                        <p>Class of 2024 <br />Sabina is a software engineer apprentice at The New York Times, where she continues to develop her technical expertise. Graduating early from Brooklyn College, she has accumulated valuable experience through internships at organizations like Shared_Studios and Wikitongues. As the Head of Technology at WIT Unite, she helps create and maintain the technology for a supportive community for CUNY women in computer science.</p>
                        <a href="https://www.linkedin.com/in/sabina-ismailova/">LinkedIn</a>
                    </div>
                </div>
            </div>

            <h2 className="heading">WITU Ambassadors</h2>
            <div className="ambassadors-container">
                <div className="ambassador-card">
                    <img src={jennifer} alt="Jennifer Perez" className="ambassador-photo" />
                    <h3 className="ambassador-name">Jennifer Perez</h3>
                    <p className="ambassador-title">Class of 2027</p>
                    <p className="ambassador-bio">Jennifer is a current sophomore studying computer science at Brooklyn College. She has previously served as the marketing intern at Varon Consulting and as an engineering intern at Teladoc Health. As a WITU ambassador, she looks forward to providing help and support in your career journey as well as the latest internships and events to attend. What she lacks in technical skill, she makes up with her know-how of career-related events beneficial for students to attend and expand their knowledge. Come and join Jennifer as you both embark on your career journey.</p>
                </div>
            </div>
        </div>
    );
}

export default Mtc;
