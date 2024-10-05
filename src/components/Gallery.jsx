import React, { useState } from 'react';
import '../styles/Gallery.css';

import img1 from '../assets/gallery/one.png';
import img2 from '../assets/gallery/two.png';
import img3 from '../assets/gallery/three.png';
import img4 from '../assets/gallery/four.png';
import img5 from '../assets/gallery/five.png';
import FadeIn from "./FadeIn.jsx";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Handle image click to show in modal
    const handleClick = (image) => {
        setSelectedImage(image);
    };

    // Handle close modal
    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <section id="gallery" className="gallery">
            <FadeIn>
            <h1>GALLERY</h1>

            <div className="gallery-grid">
                <img src={img1} alt="Image 1" onClick={() => handleClick(img1)} />
                <img src={img2} alt="Image 2" onClick={() => handleClick(img2)} />
                <img src={img3} alt="Image 3" onClick={() => handleClick(img3)} />
                <img src={img4} alt="Image 4" onClick={() => handleClick(img4)} />
                <img src={img5} alt="Image 5" onClick={() => handleClick(img5)} />
            </div>

            {/* Modal to show enlarged image */}
            {selectedImage && (
                <div className="modal" onClick={handleClose}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={selectedImage} alt="Enlarged" />
                </div>
            )}
            </FadeIn>
        </section>
    );
};

export default Gallery;
