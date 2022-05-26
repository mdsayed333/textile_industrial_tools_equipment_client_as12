import React from "react";
import { Link } from "react-router-dom";
import "./Tool.css";

const Tool = ({ tool, index }) => {
  const { name, img, description, price, minimumOrder, _id } = tool;
  return (
    <div className="">
      {index < 6 && (
        <div style={{}} className="card card-compact bg-base-100 shadow-xl cardHover">
          <figure>
            <img style={{ height: "250px" }} src={img} alt="Shoes" />
          </figure>
          <div className="card-body bg-zinc-200">
            <h2 className="card-title text-2xl">{name}</h2>
            <p>{description}</p>
            <p>
              Price: <span className="">{price}</span>
            </p>
            <p>Minimum Order: {minimumOrder}</p>
            <div className="card-actions justify-start">
              <Link to={`/purchase/${_id}`}>
                <button className=" myButton">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tool;
