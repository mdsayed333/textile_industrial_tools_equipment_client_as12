import React from 'react';

const CreatedProfile = ({profile}) => {

    return (
        <div>
          <div class="card w-96 mt-8 mx-auto bg-base-100 shadow-xl">
            <h3 className="text-2xl text-center mt-4 ">My Profile</h3>
            <figure class="px-10 pt-10">
              <img
                src={profile[0]?.img}
                alt="Shoes"
                class="rounded-full"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">{profile[0]?.name}!</h2>
              <p>Email: {profile[0]?.email}</p>
              <p>Phone: {profile[0]?.number}</p>
              <p>Address: {profile[0]?.address}</p>
              {/* <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
    );
};

export default CreatedProfile;