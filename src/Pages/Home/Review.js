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

    const { data: reviews, isLoading, error } = useQuery('reviews', () => fetch('https://powerful-fjord-17237.herokuapp.com/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }

    return (
        <div className='mt-24 pb-20 bg-white'>
            <h3 className='text-2xl text-center font-bold my-4'><span className=' border-b-2 border-primary'>Customar Reviews</span></h3>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-2/4">
                {
                    reviews?.slice(0, 20)?.reverse()?.map(({ _id, name, img, description, review }, index) => (
                        <SwiperSlide key={_id}>
                            <div>
                                <div className="card w-96 bg-gray-300 shadow-xl">
                                    <figure className="px-10 pt-6">
                                        <div class="avatar">
                                            <div class="w-24 mask mask-hexagon border-2">
                                                <img src={img} alt={name} className="rounded-xl" />
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{name}</h2>
                                        <div class="rating rating-sm">
                                            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <div className='py-10'>
                                    <span className='text-white px-2 py-1 rounded bg-gray-800'>{index + 1}</span><span className='text-6xl px-4'>...</span>
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