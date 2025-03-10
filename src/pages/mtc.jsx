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
      linkedin: "https://www.linkedin.com/in/nafisaanzum/",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-16 p-8 rounded-2xl border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-white shadow-sm">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Meet the Team</h2>
        <p className="text-gray-700 leading-relaxed text-lg">We're a small but dedicated team with big dreams. Our mission is to reach out to all CUNY campuses and empower women in tech. Through mentorship, resources, and community support, we're committed to helping every aspiring woman in technology achieve her goals.</p>
      </section>

      <section className="mb-16 p-8 rounded-2xl border-l-4 border-pink-500 bg-gradient-to-r from-pink-50 to-white shadow-sm">
        <h2 className="text-3xl font-bold text-pink-800 mb-4">Our History</h2>
        <p className="text-gray-700 leading-relaxed text-lg">Women in Tech Unite (WITU) was founded in 2023 by a group of passionate CUNY students who recognized the need for a supportive community for women in technology. Since our inception, we've grown from a small group of friends to a thriving network spanning multiple CUNY campuses.</p>
      </section>

      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Board of Directors</h2>
      <div className="flex flex-wrap justify-center p-2 gap-8">
        {members.map((member, index) => (
          <MtcCard key={index} member={member} />
        ))}
      </div>

      <section className="mt-24  py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 leading-tight">
              WITU Ambassadors
            </h2>
            <p className="text-xl text-gray-600">
              Explore our dedicated WITU Ambassadors who are making a difference in our community
            </p>
          </div>

          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="flex flex-col bg-white rounded-xl shadow-lg transition-transform hover:scale-[1.02] overflow-hidden">
              <div className="w-full h-72 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  src={jennifer}
                  alt="Jennifer Perez"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
                  <a href="#" className="hover:text-indigo-600 transition-colors">Jennifer Perez</a>
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
                  Class of 2025
                </span>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  Jennifer is a junior studying computer science at Brooklyn College.
                  She currently serves as a software engineering intern at Teladoc Health
                  and previously worked as a marketing intern at Varon Consulting.
                  As a WITU ambassador, she is passionate about helping others navigate
                  their tech career journey and sharing valuable opportunities for
                  internships and professional development.
                </p>
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="https://github.com/jenniferp1"
                      className="text-gray-500 hover:text-gray-900 text-xl transition-colors"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jennifer-perez-juarez/"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-900 text-xl transition-colors"
                    >

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
