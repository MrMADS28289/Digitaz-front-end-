import React from 'react';
import slide from '../../Assests/Slide/slide.jpg';
import slide1 from '../../Assests/Slide/slide1.jpg';
import slide2 from '../../Assests/Slide/slide2.jpg';
import slide3 from '../../Assests/Slide/slide3.jpg';
import { FaShippingFast } from 'react-icons/fa';
import { RiSafe2Fill } from 'react-icons/ri';
import { MdLocalOffer, MdOutlineSupportAgent } from 'react-icons/md';

const Banner = () => {
    return (
        <section>
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4'>
                <div class="flex items-center border-2">
                    <FaShippingFast className='text-7xl mx-3 text-primary' />
                    <div>
                        <h3 className='text-lg font-bold'>Free Shipping</h3>
                        <h5 className='text-sm'>For Orders From $50</h5>
                    </div>
                </div>
                <div class="flex items-center border-2">
                    <MdOutlineSupportAgent className='text-7xl mx-3 text-primary' />
                    <div>
                        <h3 className='text-lg font-bold'>Support 24/7</h3>
                        <h5 className='text-sm'>Call us anytime</h5>
                    </div>
                </div>
                <div class="flex items-center border-2">
                    <RiSafe2Fill className='text-7xl mx-3 text-primary' />
                    <div>
                        <h3 className='text-lg font-bold'>100% Safety</h3>
                        <h5 className='text-sm'>Only secure payments</h5>
                    </div>
                </div>
                <div class="flex items-center border-2">
                    <MdLocalOffer className='text-7xl mx-3 text-primary' />
                    <div>
                        <h3 className='text-lg font-bold'>Hot Offers</h3>
                        <h5 className='text-sm'>Discounts up to 90%</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;