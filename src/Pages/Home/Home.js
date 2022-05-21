import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Digitaz LTD.</title>
            </Helmet>
            <Banner />
        </>
    );
};

export default Home;