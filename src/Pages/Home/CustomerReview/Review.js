import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Review = ({ reviews, index }) => {
  const { img, name, rating, review } = reviews;
  return (
    <div>
      {index < 3 && (
        <div className="card bg-base-100 shadow-xl cardHover">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <FaQuoteRight className="text-4xl text-accent" />
            </h2>
            <p className="text-gray-500">{review} </p>
            <div className="card-actions">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{name}</div>
                  <div className="text-sm opacity-50 font-bold">
                    <div className="rating flex items-center">
                      <p>Rating: {rating}</p>
                      <FaStar className="text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
