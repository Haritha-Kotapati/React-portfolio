import React, { useState, useEffect } from 'react';

function WebDevImages() {
    const [image, setImage] = useState('');

    useEffect(() => {
        fetch('https://api.pexels.com/v1/search?query=programming'+' screen', {
            headers: {
                Authorization: 'QNS1VRQKuEPuGT2KPfFMj1uMJh8MXzMiRjDJMEK07EQEQV1BtVY73ABH',
            },
        })
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.photos.length);
                setImage(data.photos[randomIndex].src.large);
            })
            .catch(error => console.error('Error fetching image:', error));
    }, []);

    return (
        <div className="web-dev-image">
            <img src={image} alt="Web Development" />
        </div>
    );
}

export default WebDevImages;
