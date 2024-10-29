import React from 'react';
import wit from '../images/wit.jpeg';
// Remove this import if all styles are converted to Tailwind
// import '../css/home.css';
import Affirmation from '../components/affirmation';

function Home() {
    return (
        <div>
            <Affirmation />
            <section className="py-10 px-4 md:px-[10%]" id="whoweare">
                <div className="w-full md:w-[90%] mx-auto font-poppins">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="w-full md:w-[55%] text-center md:text-left">
                            <div className="mb-2.5">
                                <h2 className="text-2xl font-medium mb-2.5">Bridging The Gap</h2>
                                <p className="text-center md:text-left">WITUnite is a community of female CUNY students, serving to help each other grow
                                    in their academic journey and the ever-changing tech industry.</p>
                            </div>
                            <a href="https://discord.gg/PjwYfs48AX" target="_blank" rel="noopener noreferrer">
                                <button className="custom-button mx-auto md:mx-0">Join Our Discord</button>
                            </a>
                        </div>
                        <div className="w-full md:w-[40%] hidden md:block">
                            <img src={wit} alt="" className="w-full md:w-[125%] object-cover rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F3D0D2] py-5">
                <h2 className="text-3xl md:text-[250%] text-center mb-5">I am...</h2>
                <div className="flex flex-col md:flex-row justify-around px-4 md:px-[10%] gap-6 md:gap-4">
                    <div className="w-36 h-36 md:w-48 md:h-48 mx-auto bg-white rounded-full flex items-center justify-center text-center transition-transform duration-300 hover:scale-110 p-4 md:p-[2.5%]">
                        A CUNY woman in computer science
                    </div>
                    <div className="w-36 h-36 md:w-48 md:h-48 mx-auto bg-white rounded-full flex items-center justify-center text-center transition-transform duration-300 hover:scale-110 p-4 md:p-[2.5%]">
                        Passionate about technology
                    </div>
                    <div className="w-36 h-36 md:w-48 md:h-48 mx-auto bg-white rounded-full flex items-center justify-center text-center transition-transform duration-300 hover:scale-110 p-4 md:p-[2.5%]">
                        Empowering women in STEM
                    </div>
                </div>
            </section>

            <section className="bg-white shadow-md mb-5 p-4">
                <div className="p-4 md:p-[5%]">
                    <div className="text-center md:text-left text-2xl font-bold mb-2.5">
                        <h2>Welcome to Women In Tech Unite</h2>
                    </div>
                    <p className="mt-5 text-base leading-relaxed text-center md:text-left">At Women In Tech Unite, we prioritize community and connection. Our goal is to help you build meaningful relationships with friends, mentors, and peers who share your interests and aspirations. Together, we create a supportive environment that addresses the diverse needs of female students in the tech industry.</p>
                    <div className="flex flex-col md:flex-row mt-5">
                        <ul className="list-none md:w-2/3">
                            <li className="rounded-lg p-5 bg-[#F3D0D2] mb-2.5 w-full md:w-3/5">
                                <h3 className="text-base">Authentic Connections</h3>
                                <p className="text-sm leading-relaxed">Forge genuine relationships with fellow women in tech. Connect with others who understand your journey and can offer valuable insights and support.</p>
                            </li>
                            <li className="rounded-lg p-5 bg-[#F3D0D2] mb-2.5 w-full md:w-3/5">
                                <h3 className="text-base">Empowering Mentorship</h3>
                                <p className="text-sm leading-relaxed">Access mentorship opportunities from experienced professionals who are eager to share their knowledge and help you succeed in your endeavors.</p>
                            </li>
                            <li className="rounded-lg p-5 bg-[#F3D0D2] mb-2.5 w-full md:w-3/5">
                                <h3 className="text-base">Community Support</h3>
                                <p className="text-sm leading-relaxed">Lean on our community for encouragement, advice, and assistance throughout your internship search and beyond.</p>
                            </li>
                        </ul>
                        <div className="hidden md:block md:w-1/3">
                            <img src="/path/to/your/image.jpg" alt="Women in Tech" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
            {/*<section className="py-10">
                <div className="max-w-5xl mx-auto px-5 text-center">
                    <h2 className="text-4xl text-gray-800 mb-5">Showcase</h2>
                    <div className="bg-white rounded-lg p-7 shadow-md">
                    </div>
                </div>
            </section>
            
            */}

            {/* <section>Meet Members</section> */}
        </div>
    )
}

export default Home;