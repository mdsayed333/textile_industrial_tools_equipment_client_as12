import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import AllUsers from "./AllUsers";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://arcane-eyrie-67329.herokuapp.com/user", {
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
      <h2 className="text-4xl text-center my-6 font-semibold"> Make Admin </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <AllUsers 
              key={user._id} 
              user={user} 
              index={index}
              refetch={refetch}
              ></AllUsers>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
