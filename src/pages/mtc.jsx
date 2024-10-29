import React from "react";
import harmain from "../images/harmain.jpg";
import nafisa from "../images/nafisa.jpg";
import sabina from "../images/sabina.jpg";
import jennifer from "../images/jennifer.png";
import MtcCard from "../components/MtcCard";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Mtc() {
  const members = [
    {
      name: "Harmain Munir",
      role: "Co-Founder",
      classOf: "2025",
      bio: "Harmain is a Computer Science undergraduate at CUNY Brooklyn College, a software engineering fellow at CUNY Tech Prep, and a former intern at HealthyCUNY. She has also served as a teaching assistant at Girls Who Code and participated in the AT&T Technology Academy. As the Co-Founder of WITUnite, her mission is to build a tech community that empowers young women to pursue their dream careers in tech, providing support, mentorship, and resources to help them excel.",
      img: harmain,
      linkedin: "https://www.linkedin.com/in/harmain-munir-335511243/",
    },
    {
      name: "Nafisa Anzum",
      role: "Co-Founder",
      classOf: "2024",
      bio: "Nafisa Anzum is a Computer Science graduate from Brooklyn College, having completed her degree in just three years. She is currently a Service Recovery Analyst at HealthFirst and a co-founder of WIT Unite. Nafisa's experience includes internships with The New York Times, Teladoc Health, Wikitongues, and Blackstone, where she developed full-stack applications and improved engineering processes. Through WIT Unite, Nafisa aims to empower and inspire young women in tech by providing valuable resources, mentorship, and a supportive network to help them succeed in their careers.",
      img: nafisa,
      linkedin: "https://www.linkedin.com/in/nafisa-anzum-aa8526216/",
    },
    {
      name: "Sabina Ismailova",
      role: "Head of Tech",
      classOf: "2024",
      bio: "Sabina is a software engineer apprentice at The New York Times, where she continues to develop her technical expertise. Graduating early from Brooklyn College, she has accumulated valuable experience through internships at organizations like Shared_Studios and Wikitongues.As the Head of Technology at WIT Unite, she helps create and maintain the technology for a supportive community for CUNY women in computer science.",
      img: sabina,
      linkedin: "https://www.linkedin.com/in/sabina-ismailova-924a38274/",
    },
  ];

  return (
    <div>
      <section className="mb-12 p-6 border-l-4 border-indigo-500 bg-indigo-50">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Meet the Team</h2>
        <p className="text-gray-700 leading-relaxed">We're a small but dedicated team with big dreams. Our mission is to reach out to all CUNY campuses and empower women in tech. Through mentorship, resources, and community support, we're committed to helping every aspiring woman in technology achieve her goals.</p>
      </section>

      <section className="mb-12 p-6 border-l-4 border-pink-500 bg-pink-50">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">Our History</h2>
        <p className="text-gray-700 leading-relaxed">Women in Tech Unite (WITU) was founded in 2023 by a group of passionate CUNY students who recognized the need for a supportive community for women in technology. Since our inception, we've grown from a small group of friends to a thriving network spanning multiple CUNY campuses.</p>
      </section>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Board of Directors</h2>
      <div className="flex flex-wrap justify-center p-2 gap-4">
        {members.map((member, index) => (
          <MtcCard key={index} member={member} />
        ))}
      </div>

      <br />

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">WITU Ambassadors</h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Explore our dedicated WITU Ambassadors who are making a difference in our community</p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
              <a href="#">
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={jennifer} alt="Jennifer Perez" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <a href="#">Jennifer Perez</a>
                </h3>
                <span className="text-gray-500">Class of 2027</span>
                <p className="mt-3 mb-4 font-light text-gray-500">Jennifer is a current sophomore studying computer science at
                  Brooklyn College. She has previously served as the marketing intern
                  at Varon Consulting and as an engineering intern at Teladoc Health.
                  As a WITU ambassador, she looks forward to providing help and
                  support in your career journey as well as the latest internships and
                  events to attend.</p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mtc;
