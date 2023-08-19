import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import WebDevImages from "../components/WebDevImages"
import "../home.css"

export default function Home(){
    const [skills, setSkills] = useState([]);

    const defaultSkills = [
        {
            name: 'Programming',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Frameworks',
            skills: ['ReactJS', 'Bootstrap', 'jQuery']
        },
        // ... Add more default skill categories
    ];

    useEffect(() => {
        // Try to fetch skills from the API
        fetch('http://localhost:8000/api/skills')
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => {
                console.error('Error fetching skills:', error);
                // Use default skills in case of an error
                setSkills(defaultSkills);
            });
    }, []);

    return(
        <main id="home">
            <div className="hero">
                <h1>Hello, I'm Haritha</h1>
                <p>Web Developer | Toronto, Canada</p>
            </div>

            <div className="about">
                <h2>About Me</h2>
                <p>I'm an Architect turned Web Designer, Front-end developer, sustainability enthusiast, and a girl trying to build products that are accessible to everyone through design.</p>
                <p>Say Hi and let's create something extraordinary together!</p>
            </div>
            <section className="web-dev-image-section">
                <WebDevImages />
            </section>
            
            <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills-list">
                {skills.map((category, index) => (
                    <div className="skill-category" key={index}>
                        <h3>{category.name}</h3>
                        <ul>
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
        <section className="content-section">
                <h2>Contact</h2>
                <p>If you need a modern and powerful website for your business, startup or personally, I am available for work. You can email me directly at lkvharitha@gmail.com</p>
            </section>
        </main>
    )
}