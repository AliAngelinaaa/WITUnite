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
                            <div class="topic">
                            <h2>Bridging The Gap</h2>
                              <p>WITUnite is a community of female CUNY students, serving to help each other grow
                                in their academic journey and the ever-changing tech industry.</p>
                        </div>
                            <button class="speech-bubble">Join Our Discord Community</button>
                        </div>
                        <div class="right">
                            <img src={wit} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="iam">
                <div class="iam-title">I am...</div>
                <div class="circle-container">
                    <div class="circle">Circle 1 Text</div>
                    <div class="circle">Circle 2 Text</div>
                    <div class="circle">Circle 3 Text</div>
                </div>
            </section>


            <section className="goal">
    <div class="rounded-box">
        <div class="Goal-title">
            <h1>Welcome to Women In Tech Unite</h1>
        </div>
        <p class="intro-text">At Women In Tech Unite, we prioritize community and connection. Our goal is to help you build meaningful relationships with friends, mentors, and peers who share your interests and aspirations. Together, we create a supportive environment that addresses the diverse needs of female students in the tech industry.</p>
        <ul class="features-list">
            <li>
                <h3>Authentic Connections</h3>
                <p>Forge genuine relationships with fellow women in tech. Connect with others who understand your journey and can offer valuable insights and support.</p>
            </li>
            <li>
                <h3>Empowering Mentorship</h3>
                <p>Access mentorship opportunities from experienced professionals who are eager to share their knowledge and help you succeed in your endeavors.</p>
            </li>
            <li>
                <h3>Community Support</h3>
                <p>Lean on our community for encouragement, advice, and assistance throughout your internship search and beyond.</p>
            </li>
        </ul>
    </div>
</section>


            <section>Meet Members</section>
        </div>
    )
}

export default Home;