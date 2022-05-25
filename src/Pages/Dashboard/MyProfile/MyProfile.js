import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const MyProfile = () => {
    const [user] = useAuthState(auth)

    const addProfile = (event) =>{
        event.preventDefault();
        const number = event.target.number.value;
        const address = event.target.address.value;
        const img = event.target.img.value;

        const createdUser = {
            name: user.displayName,
            email: user.email,
            number: number,
            img: img,
            address: address
        }

        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(createdUser)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
            if(data.insertedId){
              toast(`Profile updated successfully...`);
            //   refetch()
            }
    
          });
            
    }
  return (
    <div className="md:w-6/12 mx-auto">
      <h2 className="text-4xl text-center"> My Profile </h2>

        
      <form onSubmit={addProfile}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">User name?</span>
          </label>
          <input
            type="text"
            name="name"
            value={user.displayName}
            disabled
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">User email</span>
          </label>
          <input
            type="text"
            name="email"
            value={user.email}
            disabled
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input
            type="number"
            name="number"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Image Link</span>
          </label>
          <input
            type="text"
            name="img"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Address</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="text-center">
          <input type="submit" value="SUBMIT" className="myButton" />
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
