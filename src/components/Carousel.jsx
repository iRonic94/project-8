import { useState } from 'react';
import './styles/carousel.scss'

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousImage = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const nextImage = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="carousel">
            <button className="carousel-arrow left" onClick={previousImage}> &#10094;</button>
            <img src={images[currentIndex]} alt="" className="carousel-image" />
            <button className="carousel-arrow right" onClick={nextImage}> &#10095;</button>
        </div>
    );
}

export default Carousel;