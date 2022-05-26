import React from 'react';

const CreatedProfile = ({profile}) => {

    return (
        <div>
          <div className="card w-96 mt-8 mx-auto bg-base-100 shadow-xl">
            <h3 className="text-2xl text-center mt-4 ">My Profile</h3>
            <figure className="px-10 pt-10">
              <img
                src={profile[0]?.img}
                alt="Shoes"
                className="rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{profile[0]?.name}!</h2>
              <p>Email: {profile[0]?.email}</p>
              <p>Phone: {profile[0]?.number}</p>
              <p>Address: {profile[0]?.address}</p>
              {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
    );
};

export default CreatedProfile;