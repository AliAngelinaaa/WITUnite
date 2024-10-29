import React from "react";

function MtcCard({ member }) {
  return (
    <div className="group md:w-24 w-full md:h-[340px] h-auto overflow-hidden object-cover md:rounded-[40px] rounded-lg transition-all duration-500 ease-in-out flex md:flex-row flex-col justify-center shadow-md shadow-pink-100 md:hover:w-[70%] md:hover:mt-2.5 p-4 md:p-0">
      {member.name === "Harmain Munir" ? (
        <img 
          src={member.img} 
          alt={member.name} 
          className="md:w-[225px] w-48 h-48 md:h-auto object-cover object-[20%_center] md:scale-150 md:mr-8 mx-auto rounded-full md:rounded-none" 
        />
      ) : (
        <img 
          src={member.img} 
          alt={member.name} 
          className="md:w-[300px] w-48 h-48 md:h-auto object-cover mx-auto rounded-full md:rounded-none"
        />
      )}
      <div className="md:hidden md:p-[1%] md:items-center md:group-hover:flex md:flex-col md:ml-4 flex flex-col items-center mt-4">
        <h2 className="text-center">{member.name}</h2>
        <h3 className="text-center">{member.role}</h3>
        <p className="text-xs text-center md:text-left">
          Class of {member.classOf} <br />
          {member.bio}
        </p>
        <a href={member.linkedin} className="text-center text-[rgb(248,102,127)] no-underline hover:text-purple-600">LinkedIn</a>
      </div>
    </div>
  );
}

export default MtcCard;