import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Purchase = () => {
  const [orderQuantity, setOrderQuantity] = useState(0);
  const {
    isLoading,
    error,
    data: tool,
    refetch,
  } = useQuery("tool", () => fetch("tool.json").then((res) => res.json()));

  if (isLoading) {
    return <Loading></Loading>;
  }
  const { name, img, description, price, minimumOrder, quantity } = tool[1];

  const handlePurchase = () => {
    if (minimumOrder < orderQuantity && quantity > orderQuantity) {
      console.log("Ok: ", orderQuantity);
      const newQuantity = quantity - orderQuantity;
      
    } else {
      console.log(
        "Type between minimum Order and available quantity: ",
        orderQuantity
      );
    }
  };

  return (
    <div>
      <div class="card card-side md:w-8/12 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>Price: {price}</p>
          <p>Minimum Order: {minimumOrder}</p>
          <p>Available quantity: {quantity}</p>
          <p>
            Order of Quantity:
            <input
              onChange={(event) => setOrderQuantity(event.target.value)}
              type="text"
              placeholder="Type Order Quantity"
              class="ml-2 input input-bordered input-sm w-full max-w-xs"
            />
          </p>
          <div class="card-actions justify-start">
            {orderQuantity ? (
              <button onClick={handlePurchase} class="btn btn-primary">
                Purchase
              </button>
            ) : (
              <button
                onClick={handlePurchase}
                disabled
                class={`btn btn-primary`}
              >
                Purchase
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
