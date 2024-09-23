import React, { useState, useEffect } from 'react';
import banner from '../images/banner6.png';

function Affirmation() {
    // Define an array of affirmations
    const affirmations = [
        "You are skilled and talented in your field of technology.",
        "Your contributions to the tech industry are valuable and important.",
        "You have the ability to innovate and create solutions that make a difference.",
        "Your knowledge and expertise in technology are respected and admired.",
        "You are a leader and a role model for other women in tech.",
        "You are confident in your abilities and your potential for success.",
        "You are breaking barriers and paving the way for future generations of women in tech.",
        "Your passion for technology fuels your drive and determination to succeed.",
        "You are constantly learning and growing in your tech career.",
        "You embrace challenges as opportunities for growth and development.",
        "Your creativity and problem-solving skills make you an asset to any tech team.",
        "You are fearless in the face of obstacles and setbacks.",
        "Your perseverance and resilience set you apart in the tech industry.",
        "You are making a positive impact on the world through your work in technology.",
        "You are deserving of recognition and celebration for your achievements in tech.",
        "Your voice and perspective are valuable contributions to tech discussions and decisions.",
        "You are empowered to pursue your passions and dreams in the field of technology.",
        "You are an inspiration to other women pursuing careers in tech.",
        "Your determination and dedication will lead you to success in your tech endeavors.",
        "You are a trailblazer, paving new paths and breaking stereotypes in the tech world.",
        "You are a true leader in the tech industry, inspiring others to follow in your footsteps.",
        "You are a master of your craft, and your skills are unmatched in the tech world.",
        "You are a true innovator, always pushing the boundaries of what's possible in technology.",
        "You are a beacon of hope for women in tech, showing them that they can achieve anything they set their minds to.",
        "You are a true inspiration to everyone around you, and your passion for technology is contagious.",
        "You are a true leader in the tech industry, inspiring others to follow in your footsteps.",
        "You are a master of your craft, and your skills are unmatched in the tech world.",
               
    ];


    // State to manage the current affirmation index
    const [currentAffirmationIndex, setCurrentAffirmationIndex] = useState(0);

    // Function to generate a random index for the affirmation
    const getRandomIndex = () => {
        return Math.floor(Math.random() * affirmations.length);
    };

    // Set a random affirmation index when the component mounts
    useEffect(() => {
        setCurrentAffirmationIndex(getRandomIndex());
    }, []);

    return (
        <div className="relative p-[10%] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
        <div className="relative z-10 -top-15 text-right text-black text-2xl font-bold" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}>
        <div className="background-image"></div>
            <h2>Daily Affirmation</h2>
            <p >{affirmations[currentAffirmationIndex]}</p>
        </div>
        </div>

    );
}

export default Affirmation;
