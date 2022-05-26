import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import CreatedProfile from "./CreatedProfile";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const userEemail = user.email;
  const url = `https://arcane-eyrie-67329.herokuapp.com/profile/${userEemail}`;
  const {
    isLoading,
    error,
    data: profile,
    refetch,
  } = useQuery("tool", () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <Loading></Loading>;
  }

  const addProfile = (event) => {
    event.preventDefault();
    const number = event.target.number.value;
    const address = event.target.address.value;
    const img = event.target.img.value;

    const createdUser = {
      name: user.displayName,
      email: user.email,
      number: number,
      img: img,
      address: address,
    };

    fetch("https://arcane-eyrie-67329.herokuapp.com/profile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createdUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast(`Profile updated successfully...`);
            refetch()
        }
      });
  };

  return (
    <div>
      {profile?.length > 0 ? (
        <CreatedProfile profile={profile}></CreatedProfile>
      ) : (
        <div className="w-full md:w-6/12 mx-auto text-center px-8">
          <h2 className="text-4xl text-center"> Update Profile </h2>

          <form onSubmit={addProfile}>
            <div class="form-control ">
              <label class="label">
                <span class="label-text">User name?</span>
              </label>
              <input
                type="text"
                name="name"
                value={user.displayName}
                disabled
                placeholder="Type here"
                class="input input-bordered"
              />
            </div>
            <div class="form-control ">
              <label class="label">
                <span class="label-text">User email</span>
              </label>
              <input
                type="text"
                name="email"
                value={user.email}
                disabled
                placeholder="Type here"
                class="input input-bordered "
              />
            </div>
            <div class="form-control ">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                name="number"
                required
                placeholder="Type here"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Image Link</span>
              </label>
              <input
                type="text"
                required
                name="img"
                placeholder="Type here"
                class="input input-bordered"
              />
            </div>
            <div class="form-control ">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="Type here"
                class="input input-bordered"
              />
            </div>
            <div className="text-center my-5">
              <input type="submit" value="SUBMIT" className="myButton" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
