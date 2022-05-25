import React from "react";
import {
  FaChartLine,
  FaMoneyCheckAlt,
  FaBriefcase,
  FaUserCheck,
} from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <div className="mx-auto text-center my-12">
      <h2 className="text-4xl text-center font-bold"> Our Company Growing Status</h2>
      <h2 className="text-3xl text-center">All credit goes to our customer</h2>
      <div class=" shadow grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        <div class="shadow my-4 py-5">
          <div class=" text-center w-12 mx-auto">
            <FaChartLine className="text-5xl text-secondary" />
          </div>
          <div class="stat-title">Achievement</div>
          <div class="text-secondary text-base">65.6K+ Sell</div>
          <div class="stat-desc">21% more than last year</div>
        </div>

        <div class="shadow my-4 py-5">
          <div class=" text-center w-12 mx-auto">
            <FaMoneyCheckAlt className="text-5xl text-primary" />
          </div>
          <div class="stat-title">Annual Revenue</div>
          <div class="stat-value text-primary">250.6M</div>
          <div class="stat-desc">30% more than last year</div>
        </div>

        <div class="shadow my-4 py-5">
          <div class=" text-center w-12 mx-auto">
            <FaBriefcase className="text-5xl text-accent" />
          </div>
          <div class="stat-title">New Employed</div>
          <div class="stat-value text-accent">8.5k+</div>
          <div class="stat-desc">50% more than last year</div>
        </div>

        <div class="shadow my-4 py-5">
          <div class=" text-center w-12 mx-auto">
            <FaUserCheck className="text-5xl text-netural" />
          </div>
          <div class="stat-title">User Review</div>
          <div class="stat-value text-netural">450+ Tools</div>
          <div class="stat-desc">29% more than last year</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
