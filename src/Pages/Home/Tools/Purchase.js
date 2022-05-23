import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Purchase = () => {
  const { id } = useParams();
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [quantityError, setQuantityError] = useState('');
  const url = `http://localhost:5000/tools/${id}`;
  const {
    isLoading,
    error,
    data: tool,
    refetch,
  } = useQuery("tool", () => fetch(url).then((res) => res.json()));
//   console.log(id);
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { name, img, description, price, minimumOrder, available } = tool;

  const handlePurchase = () => {
    if (minimumOrder < orderQuantity && available > orderQuantity) {
      console.log("Ok: ", orderQuantity);
      const newQuantity = available - orderQuantity;
      
      console.log(newQuantity);
    } else {
        setQuantityError(<p className="text-red-500">Type order between minimum and available quantity!</p>);
      
    }
  };

  return (
    <div>
      <div class="card card-side md:w-8/12 mx-auto bg-base-100 shadow-xl">
        <figure className="sm:col-span-1">
          <img src={img} alt="Movie" />
        </figure>
        <div class="card-body sm:col-span-1">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>Price: {price}</p>
          <p>Minimum Order: {minimumOrder}</p>
          <p>Available quantity: {available}</p>
          <p>
            Order of Quantity:
            <input
              onChange={(event) => setOrderQuantity(event.target.value)}
              type="text"
              placeholder="Type Order Quantity"
              class="ml-2 input input-bordered input-sm w-full max-w-xs"
            />
          </p>
          {quantityError}
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
