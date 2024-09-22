import React from "react";
import Service from "../components/service";
import "../css/services.css";

//     let services = [
//         { id: 1, title: 'Service', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: ''},
//         { id: 2, title: 'Service', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: ''},
//         { id: 3, title: 'Service', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: ''},
//     ];
//   return (
//     <div>
//         <div style={{marginTop: '24px', fontSize: '32px', textAlign: 'center'}}>Our Services</div>
//         {/* <Service /> */}
//         <div className='services'>
//             {services.map((item) => (
//                 <Service service={item}/>
//             ))}
//         </div>
//     </div>
//   )

function Services() {
  const services = [
    {
      id: 1,
      title: "Project Sprint",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
    {
      id: 2,
      title: "Daily Leetcode",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
    {
      id: 3,
      title: "Walk-in Thursdays",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
    {
      id: 4,
      title: "Portfolio Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
  ];

  return (
    <section>
      <div className="services-container">
        <div style={{ marginTop: '24px', fontSize: '32px', textAlign: 'center' }}>Our Services</div>
        <div className="services-description">
          <p className="services-intro">WITU offers a variety of services to help women in tech succeed, including:</p>
          <ul className="services-list">
            <li><strong>Mentorship Programs:</strong> Personalized guidance from experienced professionals to help navigate career challenges and growth.</li>
            <li><strong>Workshops & Training:</strong> Skill-building sessions covering topics like coding, leadership, and career development.</li>
            <li><strong>Networking Opportunities:</strong> Connect with peers and industry experts through events, conferences, and community meetups.</li>
            <li><strong>Job Placement Support:</strong> Access to exclusive job opportunities and career coaching to assist with job placement and transitions.</li>
            <li><strong>Community Support:</strong> Join a thriving community of women in tech for encouragement, collaboration, and shared learning experiences.</li>
          </ul>
          <p className="services-outro">
            Whether you're just starting out or looking to advance in your tech career, WITU provides the resources and support to help you achieve your goals.
          </p>
        </div>

        <div className="services">
          {services.map((service) => (
            <Service
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
