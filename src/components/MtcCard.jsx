import React from "react";

function MtcCard({ member }) {
  return (
    <div className="group w-24 h-[340px] overflow-hidden object-cover rounded-[40px] transition-all duration-500 ease-in-out flex justify-center shadow-md shadow-pink-100 hover:w-[70%] hover:mt-2.5">
      {member.name === "Harmain Munir" ? (
        <img src={member.img} alt={member.name} className="w-[225px] object-cover object-[20%_center] scale-150 mr-8" />
      ) : (
        <img src={member.img} alt={member.name} className="w-[300px] object-cover"/>
      )}
      <div className="hidden p-[1%] items-center group-hover:flex flex-col ml-4">
        <h2 className="text-center">{member.name}</h2>
        <h3 className="text-center">{member.role}</h3>
        <p className="text-xs">
          Class of {member.classOf} <br />
          {member.bio}
        </p>
        <a href={member.linkedin} className="text-center text-[rgb(248,102,127)] no-underline hover:text-purple-600">LinkedIn</a>
      </div>
    </div>
  );
}

export default MtcCard;