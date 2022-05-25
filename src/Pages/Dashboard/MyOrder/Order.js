import React from "react";
import { Link } from "react-router-dom";

const Order = ({order, refetch}) => {
    // console.log(order)
    const { name, img, description, price, minimumOrder, _id } = order;

    const handleDelete = () => {
        const confirm = window.confirm("Are You Sure To Delete!");
        console.log(confirm)
        const url = `http://localhost:5000/order/${_id}`;
        if(confirm){
            fetch( url, {
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                // console.log(data)
                refetch();
              })
        }
    }
  return (
    <div style={{}} class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img style={{ height: "250px" }} src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <div className="flex justify-between">
            <div class="card-actions justify-end">
                <button  class="btn btn-primary">Pay</button>
            </div>
            <div class="card-actions justify-start">
                <button onClick={handleDelete} class="btn btn-primary">Delete</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
