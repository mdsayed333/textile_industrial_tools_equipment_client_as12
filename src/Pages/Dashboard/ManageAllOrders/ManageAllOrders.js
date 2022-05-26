import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import Order from "./Order";

const ManageAllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://arcane-eyrie-67329.herokuapp.com/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-4xl text-center my-6"> Manage All Orders </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>User Email</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Order 
              key={order._id} 
              order={order} 
              index={index}
              refetch={refetch}
              ></Order>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
