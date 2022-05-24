import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool, index }) => {
  const { name, img, description, price, minimumOrder, _id } = tool;
  return (
    <div>
      {index < 6 && (
        <div style={{}} class="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img style={{ height: "250px" }} src={img} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Minimum Order: {minimumOrder}</p>
            <div class="card-actions justify-start">
              <Link to={`/purchase/${_id}`}>
                <button class="btn btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tool;
