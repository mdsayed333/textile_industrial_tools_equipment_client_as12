import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import './VerifiedSeller.css';

const VerifiedSeller = () => {
  const [user,loading] = useAuthState(auth);
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <div class="card  bg-base-100 shadow-xl  grid lg:grid-cols-2">
        <div class="card-body cardHover">
          <div className=" shadow-xl p-5">
            <div className="flex justify-between my-4">
              <div className="w-8/12">
                <h2 className="text-2xl font-bold">
                  Save Time! Get verified sellers exporting to Bangladesh
                </h2>
              </div>
              <div>
                {user && <p className="">{user?.displayName}</p>}
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div className="w-6/12 pt-3">
                <p>Email</p>
              </div>
              <div className="w-6/12">
                <input
                  type="email"
                  value={user?.email}
                  placeholder="Type here"
                  class="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div className="w-6/12 pt-3">
                <p>I want quotes for</p>
              </div>
              <div className="w-6/12">
                <input
                  type="text"
                  value="Garment & Textile Industrial Tools"
                  placeholder="Type here"
                  class="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div className="w-6/12 pt-3">
                <p>Quantity</p>
              </div>
              <div className="w-6/12">
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div className="w-6/12 pt-3">
                <p>Briefly describe your requirement</p>
              </div>
              <div className="w-6/12">
                <textarea
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
            </div>
            <div className="text-right">
              <button className="myButton">SUBMIT REQUIREMENT</button>
            </div>
          </div>
        </div>
        <div class="card-body mx-auto cardHover">
          <div className=" shadow-xl p-3">
            <img
              style={{height: '400px'}}
              src="https://i.ibb.co/nzhbWfY/car-wash.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedSeller;
