import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Review = ({ reviews, index }) => {
  const { img, name, rating, review } = reviews;
  return (
    <div class="card bg-base-100 shadow-xl ">
      <div class="card-body items-center text-center">
        <h2 class="card-title">
          <FaQuoteRight className="text-4xl text-accent" />
        </h2>
        <p className="text-gray-500">{review} </p>
        <div class="card-actions">
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{name}</div>
              <div class="text-sm opacity-50 font-bold">
                <div class="rating flex items-center">
                  <p>Rating: {rating}</p>
                  <FaStar className="text-accent"/>
                  {/* <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
