import React from "react";

const Order = ({ order, index }) => {
  const { name, email, description, orderQuantity, price } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name} </td>
      <td>{email}</td>
      <td>{orderQuantity}</td>
      <td>{price}</td>
      <td>
        <button
          //   onClick={handleDelete} Panding Shift 
          className="myButtonSm"
        >
          Unpaid
        </button>
      </td>
    </tr>
  );
};

export default Order;
