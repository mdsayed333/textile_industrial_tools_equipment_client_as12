import React from 'react';
import { FaQuoteRight } from "react-icons/fa";


const Review = ({review, index}) => {
    return (
        <div class="card bg-base-100 shadow-xl ">
          <div class="card-body items-center text-center">
            <h2 class="card-title">
              <FaQuoteRight className="text-4xl text-accent" />
            </h2>
            <p className="text-gray-500">
              If a dog chews shoes whose shoes does he choose? If a dog chews
              shoes whose shoes does he choose?
            </p>
            <div class="card-actions">
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://tkpro-demo2.envalab.com/25/wp-content/uploads/sites/26/2022/04/handsome-man-4LH3GB9-1.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Hart Hagerty</div>
                  <div class="text-sm opacity-50 text-accent font-bold">

                  <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
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