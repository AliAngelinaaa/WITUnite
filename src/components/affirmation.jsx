import React, { useState, useEffect } from 'react';
import '../css/affirmation.css';

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
        <div className="affirmation">
            <h2>Affirmation</h2>
            <p>{affirmations[currentAffirmationIndex]}</p>
        </div>
    );
}

export default Affirmation;
