import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import CustomerReview from './CustomerReview/CustomerReview';
import Tools from './Tools/Tools';
import VerifiedSeller from './VerifiedSeller/VerifiedSeller';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <VerifiedSeller></VerifiedSeller>
            <CustomerReview></CustomerReview>
            <h2 className='text-4xl text-center'> Extra Section 2 </h2>
        </div>
    );
};

export default Home;