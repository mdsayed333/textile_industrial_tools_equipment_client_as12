import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import CustomerReview from './CustomerReview/CustomerReview';
import ExploreByProduce from './ExploreByProduce/ExploreByProduce';
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
            <ExploreByProduce></ExploreByProduce>
        </div>
    );
};

export default Home;