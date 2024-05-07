import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader

const DemoCarousel = () => {
    return (
        <Carousel showArrows={true} autoPlay infiniteLoop>
            <div>
                <img src="/assets/images/big-house.png" alt="Big House" />
                <p className="legend">Providing clients with the best experience!</p>
            </div>
            <div>
                <img src="/assets/images/doctor.png" alt="Doctor" />
                <p className="legend">Featuring the Best for our clients</p>
            </div>
            <div>
                <img src="/assets/images/doct.png" alt="Doctor Care" />
                <p className="legend">Where Comfort, Care, and Community Flourish</p>
            </div>
        </Carousel>
    );
};

export default DemoCarousel;

