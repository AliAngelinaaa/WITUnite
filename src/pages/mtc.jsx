import React from "react";
import harmain from "../images/harmain.jpg";
import nafisa from "../images/nafisa.jpg";
import sabina from "../images/sabina.jpg";
import jennifer from "../images/jennifer.png";
import "../css/mtc.css";
import MtcCard from "../components/MtcCard";

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
      <section className="intro-container">
        <h2 className="heading">Meet the Team</h2>
        <p className="intro-paragraph">We're a small but dedicated team with big dreams. Our mission is to reach out to all CUNY campuses and empower women in tech. Through mentorship, resources, and community support, we're committed to helping every aspiring woman in technology achieve her goals.</p>

      </section>

      {/* New section for WITU history */}
      <section className="intro-container">
        <h2 className="heading">Our History</h2>
        <p>Women in Tech Unite (WITU) was founded in 2023 by a group of passionate CUNY students who recognized the need for a supportive community for women in technology. Since our inception, we've grown from a small group of friends to a thriving network spanning multiple CUNY campuses.</p>
      </section>
      <h2 className="heading">Board of Directors</h2>
      <div className="cardContainer">
        {members.map((member, index) => (
          <MtcCard key={index} member={member} />
        ))}
      </div>

      <br />

      <h2 className="heading">WITU Ambassadors</h2>
      <div className="ambassadors-container">
        <div className="ambassador-card">
          <img
            src={jennifer}
            alt="Jennifer Perez"
            className="ambassador-photo"
          />
          <h3 className="ambassador-name">Jennifer Perez</h3>
          <p className="ambassador-title">Class of 2027</p>
          <p className="ambassador-bio">
            Jennifer is a current sophomore studying computer science at
            Brooklyn College. She has previously served as the marketing intern
            at Varon Consulting and as an engineering intern at Teladoc Health.
            As a WITU ambassador, she looks forward to providing help and
            support in your career journey as well as the latest internships and
            events to attend. What she lacks in technical skill, she makes up
            with her know-how of career-related events beneficial for students
            to attend and expand their knowledge. Come and join Jennifer as you
            both embark on your career journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mtc;
