import React from 'react';
import wit from '../images/wit.jpeg';
// Remove this import if all styles are converted to Tailwind
// import '../css/home.css';
import Affirmation from '../components/affirmation';

function Home() {
    return (
        <div>
            <Affirmation />
            <section className="py-10 px-[10%]" id="whoweare">
                <div className="w-[90%] mx-auto font-poppins">
                    <div className="flex justify-between items-center">
                        <div className="w-[55%]">
                            <div className="mb-2.5">
                                <h2 className="text-2xl font-medium mb-2.5">Bridging The Gap</h2>
                                <p className="text-justify">WITUnite is a community of female CUNY students, serving to help each other grow
                                    in their academic journey and the ever-changing tech industry.</p>
                            </div>
                            <a href="https://discord.gg/PjwYfs48AX" target="_blank" rel="noopener noreferrer">
                                <button className="custom-button">Join Our Discord</button>
                            </a>
                        </div>
                        <div className="w-[40%]">
                            <img src={wit} alt="" className="w-[125%] object-cover rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#F3D0D2] py-5 overflow-x-auto">
                <h2 className="text-[250%] text-center mb-5">I am...</h2>
                <div className="flex justify-around px-[10%] w-full">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110 p-[2.5%]">
                        A CUNY woman in computer science
                    </div>
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110 p-[2.5%]">
                        Passionate about technology
                    </div>
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110 p-[2.5%]">
                        Empowering women in STEM
                    </div>
                </div>
            </section>

            <section className="bg-white rounded-none shadow-md mb-5 p-4 w-full">
                <div className="bg-white p-[5%] rounded-none w-full m-0">
                    <div className="text-center text-2xl font-bold mb-2.5">
                        <h2>Welcome to Women In Tech Unite</h2>
                    </div>
                    <p className="mt-5 text-base leading-relaxed">At Women In Tech Unite, we prioritize community and connection. Our goal is to help you build meaningful relationships with friends, mentors, and peers who share your interests and aspirations. Together, we create a supportive environment that addresses the diverse needs of female students in the tech industry.</p>
                    <ul className="list-none mt-5">
                        <li className="rounded-lg p-5 bg-[#F3D0D2] mb-2.5 w-3/5">
                            <h3 className="text-base">Authentic Connections</h3>
                            <p className="text-sm leading-relaxed">Forge genuine relationships with fellow women in tech. Connect with others who understand your journey and can offer valuable insights and support.</p>
                        </li>
                        <li className="rounded-lg p-5 bg-[#F3D0D2] mb-2.5 w-3/5">
                            <h3 className="text-base">Empowering Mentorship</h3>
                            <p className="text-sm leading-relaxed">Access mentorship opportunities from experienced professionals who are eager to share their knowledge and help you succeed in your endeavors.</p>
                        </li>
                        <li className="rounded-lg p-5 bg-[#F3D0D2] mb-2.5 w-3/5">
                            <h3 className="text-base">Community Support</h3>
                            <p className="text-sm leading-relaxed">Lean on our community for encouragement, advice, and assistance throughout your internship search and beyond.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="py-10">
                <div className="max-w-5xl mx-auto px-5 text-center">
                    <h2 className="text-4xl text-gray-800 mb-5">Showcase</h2>
                    <div className="bg-white rounded-lg p-7 shadow-md">
                        {/* Content goes here */}
                    </div>
                </div>
            </section>

            {/* <section>Meet Members</section> */}
        </div>
    )
}

export default Home;