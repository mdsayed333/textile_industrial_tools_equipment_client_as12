import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import CustomerReview from './CustomerReview/CustomerReview';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            {/* <h2 className='text-4xl text-center'> Business Summary</h2> */}
            <BusinessSummary></BusinessSummary>
            <CustomerReview></CustomerReview>
            <h2 className='text-4xl text-center'> Extra Section 1</h2>
            <h2 className='text-4xl text-center'> Extra Section 2 </h2>
            <h2 className='text-4xl text-center'> Footer </h2>
        </div>
    );
};

export default Home;