import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [quantityError, setQuantityError] = useState("");
  const url = `https://arcane-eyrie-67329.herokuapp.com/tools/${id}`;
  const {
    isLoading,
    error,
    data: tool,
    refetch,
  } = useQuery("tool", () => fetch(url).then((res) => res.json()));
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { name, img, description, price, minimumOrder, available } = tool;

  const handlePurchase = () => {
    if (minimumOrder < orderQuantity && available > orderQuantity) {

        // Manage quantity and update
      const newQuantity =( parseInt(available) - parseInt(orderQuantity));
      const newProductQuantity = { 
        name: name,
        description: description,
        img: img,
        price: price,
        minimumOrder: minimumOrder,
        available: newQuantity 
      };
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(newProductQuantity),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) =>{
          // toast.success("Added Order Successfully!");
          // refetch();
        });
      // console.log(newQuantity);

      // Add a Order and set DataBase
      const orders = {
        name: name,
        email: user.email,
        img: img,
        description: description,
        price: price,
        orderQuantity: orderQuantity
      }

      fetch('https://arcane-eyrie-67329.herokuapp.com/order', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orders)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
        if(data.insertedId){
          toast(`Order add successfully...`);
          refetch()
        }

      });

    } else {
      setQuantityError(
        <p className="text-red-500">
          Type order between minimum and available quantity!
        </p>
      );
    }
  };

  return (
    <div className="p-12">
      <div className="card card-side md:w-8/12 mx-auto bg-base-100 shadow-xl">
        <figure className="sm:col-span-1">
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body sm:col-span-1">
          <h2 className="card-title">{name}</h2>
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
              className="ml-2 input input-bordered input-sm w-full max-w-xs"
            />
          </p>
          {quantityError}
          <div className="card-actions justify-start">
            {orderQuantity ? (
              <button onClick={handlePurchase} className="btn btn-primary">
                Purchase
              </button>
            ) : (
              <button
                onClick={handlePurchase}
                disabled
                className={`btn btn-primary`}
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
