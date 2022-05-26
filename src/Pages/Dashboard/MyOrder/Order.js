import React from "react";
import { Link } from "react-router-dom";

const Order = ({order, refetch}) => {
    // console.log(order)
    const { name, img, description, price, minimumOrder, _id } = order;

    const handleDelete = () => {
        const confirm = window.confirm("Are You Sure To Delete!");
        console.log(confirm)
        const url = `https://arcane-eyrie-67329.herokuapp.com/order/${_id}`;
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
    <div style={{}} className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img style={{ height: "250px" }} src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <div className="flex justify-between">
            <div className="card-actions justify-end">
                <button  className="btn btn-primary">Pay</button>
            </div>
            <div className="card-actions justify-start">
                <button onClick={handleDelete} className="btn btn-primary">Delete</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
