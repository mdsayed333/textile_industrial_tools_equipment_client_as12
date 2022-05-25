import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <h2 className="text-4xl "> Dashboard </h2>

      <div class="drawer drawer-mobile background">
        <input
          id="my-drawer-2"
          type="checkbox"
          class="drawer-toggle overflow-y-hidden"
        />
        <div class="drawer-content overflow-y-hidden">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side overflow-auto background">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {/* <li>
              <Link className="myButton" to="dashboard/myProfile">
                My Profile
              </Link>
            </li> */}

            <li>
              {user && !admin && (
                <>
                  <Link className="myButton" to="/dashboard">
                    My Profile
                  </Link>
                  <Link className="myButton" to="/dashboard/myOrder">
                    My Order
                  </Link>
                  <Link className="myButton" to="/dashboard/addReview">
                    Add Review
                  </Link>
                </>
              )}
            </li>

            <li>
              {admin && (
                <>
                  <Link className="myButton" to="/dashboard">
                    My Profile
                  </Link>
                  <Link className="myButton" to="manageOrder">
                    {" "}
                    Manage All Order
                  </Link>
                  <Link className="myButton" to="makeAdmin">
                    {" "}
                    Make Admin
                  </Link>
                  <Link className="myButton" to="addProduct">
                    {" "}
                    Add New Product
                  </Link>
                  <Link className="myButton" to="manageProduct">
                    {" "}
                    Manage Product
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
