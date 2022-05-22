import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./sweperstyle.css";
import { Pagination } from "swiper";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const Review = () => {

    const { data: reviews, isLoading, error } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }

    return (
        <div className='mt-24 bg-white'>
            <h3 className='text-2xl text-center font-bold my-4'><span className=' border-b-2 border-primary'>Customar Reviews</span></h3>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-2/4">
                {
                    reviews.reverse().map(({ _id, name, img, description, review }) => (
                        <SwiperSlide key={_id}>
                            <div class="card lg:card-side bg-base-300 shadow-xl mb-10 w-2/4">
                                <figure><img src={img} alt="Album" /></figure>
                                <div class="card-body w-2/4">
                                    <h2 class="card-title">{name}</h2>
                                    <h3 className='card-title'>Ratings: {review}</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Review;