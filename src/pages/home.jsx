import React from 'react';
import wit from '../images/wit.jpeg';
import '../css/home.css';
import Affirmation from '../components/affirmation';


function Home() {
    return (
        <div>
            <Affirmation />
            <section class="whoweare" id="whoweare">
                <div class="content">
                    <div class="whoweare-details">
                        <div class="left">
                            <div class="topic">Who We Are</div>
                            <p>
                                We are a passionate group of women in tech at CUNY who believe in the power of community. We recognize the unique challenges women can face in this field, but we're here to change the narrative.<br/><br/>
                                At Wit Unite, we're building a supportive network to empower women at CUNY to excel in tech. We share resources, collaborate on projects, and celebrate each other's achievements.                            </p>
                        </div>
                        <div class="right">
                            <img src={wit} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="iam">
                <div class="iam-title">I am someone...</div>
                <div class="circle-container">
                    <div class="circle">who wants to be surrounded by like minded people</div>
                    <div class="circle">who wants to give back to the community</div>
                    <div class="circle">Circle 3 Text</div>
                </div>
            </section>


            <section className="goal">
                <div className="Goal-title">Goal: Empowering Women in Tech at CUNY</div>
                <p> As part of our commitment to fostering diversity and inclusivity in the field of technology, our goals for women in tech at CUNY include:</p>
                <ul>
                    <li>Providing targeted support and resources for women pursuing careers in tech.</li>
                    <li>Creating a supportive and inclusive environment where women feel empowered to excel in their tech studies and careers.</li>
                    <li>Organizing workshops, seminars, and networking events specifically tailored to address the needs and challenges faced by women in the tech industry.</li>
                    <li>Partnering with industry leaders to offer mentorship opportunities and internships for female students.</li>
                    <li>Promoting female representation in leadership roles within the tech community at CUNY.</li>
                </ul>
            </section>
            {/* <section>Meet Members</section> */}
        </div>
    )
}

export default Home;