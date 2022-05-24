import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-4xl text-center"> Dashboard </h2>

      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle overflow-y-hidden" />
        <div class="drawer-content overflow-y-hidden">
          {/* <!-- Page content here --> */}
          {/* <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
          <Outlet></Outlet>
        </div>
        <div class="drawer-side overflow-auto">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
               <Link to='myProfile'>My Profile</Link>
            </li>

            <li>
               <Link to='myOrder'>My Order</Link>
            </li>
            <li>
               <Link to='addReview'>Add Review</Link>
            </li>


            <li>
               <Link to='manageOrder'> Manage All Order</Link>
            </li>
            <li>
               <Link to='makeAdmin'> Make Admin</Link>
            </li>
            <li>
               <Link to='addProduct'> Add New Product</Link>
            </li>
            <li>
               <Link to='manageProduct'> Manage Product</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
