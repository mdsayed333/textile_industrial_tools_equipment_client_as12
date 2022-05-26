import React from "react";
import {
  FaChartLine,
  FaMoneyCheckAlt,
  FaBriefcase,
  FaUserCheck,
} from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <div className="mx-auto text-center my-12 py-10">
      <h2 className="text-4xl text-center font-bold"> Our Company Growing Status</h2>
      <h2 className="text-3xl text-center mb-8">All credit goes to our customer</h2>
      <div className=" shadow grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 ">
        <div className="shadow my-4 py-5 cardHover">
          <div className=" text-center w-12 mx-auto">
            <FaChartLine className="text-5xl text-secondary" />
          </div>
          <div className="stat-title">Achievement</div>
          <div className="text-secondary text-base">65.6K+ Sell</div>
          <div className="stat-desc">21% more than last year</div>
        </div>

        <div className="shadow my-4 py-5 cardHover">
          <div className=" text-center w-12 mx-auto">
            <FaMoneyCheckAlt className="text-5xl text-primary" />
          </div>
          <div className="stat-title">Annual Revenue</div>
          <div className="stat-value text-primary">250.6M</div>
          <div className="stat-desc">30% more than last year</div>
        </div>

        <div className="shadow my-4 py-5 cardHover">
          <div className=" text-center w-12 mx-auto">
            <FaBriefcase className="text-5xl text-accent" />
          </div>
          <div className="stat-title">New Employed</div>
          <div className="stat-value text-accent">8.5k+</div>
          <div className="stat-desc">50% more than last year</div>
        </div>

        <div className="shadow my-4 py-5 cardHover">
          <div className=" text-center w-12 mx-auto">
            <FaUserCheck className="text-5xl text-netural" />
          </div>
          <div className="stat-title">User Review</div>
          <div className="stat-value text-netural">450+ Tools</div>
          <div className="stat-desc">29% more than last year</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
