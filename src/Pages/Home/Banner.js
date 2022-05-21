import React from 'react';
import slide from '../../Assests/Slide/slide.jpg';
import slide1 from '../../Assests/Slide/slide1.jpg';
import slide2 from '../../Assests/Slide/slide2.jpg';
import slide3 from '../../Assests/Slide/slide3.jpg';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row">
                            <img src={slide2} class="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 class="text-5xl font-bold">Big Choice Of Plumbing Products!</h1>
                                <p class="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" class="carousel-item w-full">
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row">
                            <img src={slide} class="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 class="text-5xl font-bold">Scrowdrivers Proffessional Tools!</h1>
                                <p class="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" class="carousel-item w-full">
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row">
                            <img src={slide3} class="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 class="text-5xl font-bold">Big Choice Of Plumbing Products!</h1>
                                <p class="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" class="carousel-item w-full">
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row">
                            <img src={slide1} class="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 class="text-5xl font-bold">Scrowdrivers Proffessional Tools!</h1>
                                <p class="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;