import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import "./CustomerReview.css";
import Review from "./Review";

const CustomerReview = () => {
    const { isLoading, error, data: reviews, refetch } = useQuery('review', () =>
     fetch('https://arcane-eyrie-67329.herokuapp.com/review')
     .then(res => res.json())
    );

    if(isLoading){
        return <Loading></Loading>
    }

    const ratting = 3
  return (
    <div className="customer-review-container py-10 px-5">
      <h2 className="text-3xl text-center font-bold mb-6"> Customer Review</h2>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
              reviews.map((review, index) => <Review 
                key={review._id}
                reviews={review}
                index={index}
              ></Review>)
          }
        
       
      </div>
    </div>
  );
};

export default CustomerReview;
