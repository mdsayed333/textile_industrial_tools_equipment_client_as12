import React from "react";
import { toast } from "react-toastify";

const AllUsers = ({ user, index, refetch }) => {
  const { _id, email, role} = user;

  const doAdmin = () => {
    fetch(`https://arcane-eyrie-67329.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
          console.log(data);
        }
      });
  };

  const handleDelete = () => {
    const confirm = window.confirm("Are You Sure To Delete!");
    console.log(confirm)
    const url = `https://arcane-eyrie-67329.herokuapp.com/user/${email}`;
    if(confirm){
        fetch( url, {
              method: 'DELETE',
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
                toast.success("Successfully Deleted");

            }
            refetch();
          })
    }
}

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email} </td>
      <td>
        {!role && <button onClick={doAdmin} className="myButtonSm">
          Make Admin
        </button>}
      </td>
      <td>
        <button  onClick={handleDelete} className="myButtonSm">Delete</button>
      </td>
    </tr>
  );
};

export default AllUsers;
