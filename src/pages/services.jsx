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
    <div className="services-container">
      <div style={{marginTop: '24px', fontSize: '32px', textAlign: 'center'}}>Our Services</div>
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
  );
}
export default Services;
