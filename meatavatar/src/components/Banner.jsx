import React, { useEffect } from 'react';
import "../CSS/Banner.css";
import { Link } from 'react-router-dom';

function Banner() {
  // Your image URLs
  const images = [
    "https://media.discordapp.net/attachments/445928139021877259/1180907883253223434/image3.png?ex=657f212b&is=656cac2b&hm=c67e869482d28f9f4b41f9657117acaf76879b4f7974a3be124dbf5d0b6929bb&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/445928139021877259/1180907883546812596/image2.png?ex=657f212b&is=656cac2b&hm=15a7df0ad4ced33f5556121e2f11607d58e9b0a0b47fdda7252fdcc4cf930075&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/445928139021877259/1180907883861389363/image1.png?ex=657f212b&is=656cac2b&hm=6643ac9963b374a42931623bf146e08bcc3c9bb3d8966a55659df00f541b3af3&=&format=webp&quality=lossless"
  ];

  // State to keep track of the current slide and the fading state
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Function to go to the next slide
  const next = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to go to the previous slide
  const previous = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  // Function to jump to a specific slide
  const jumpToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    // Set up an interval to automatically advance to the next slide every 5 seconds
    const intervalId = setInterval(next, 5000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="left-arrow" onClick={previous}>&#9664;</div>
      <img
        id="slideImg"
        src={images[currentSlide]}
        alt={`Image ${currentSlide + 1}`}
        className="slide-image"
      />
      <div className="dots">
        {images.map((image, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "actives" : ""}`}
            onClick={() => jumpToSlide(index)}
          ></span>
        ))}
      </div>
      <div className="right-arrow" onClick={next}>&#9654;</div>
    </div>
  );
}

export default Banner;
