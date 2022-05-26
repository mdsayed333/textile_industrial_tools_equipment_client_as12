import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data1) => {
    const { img, review, rating } = data1;
    console.log(data1);
    const customerReview = {
      name: user?.displayName,
      img: img,
      review: review,
      rating: rating,
    };

    fetch("https://arcane-eyrie-67329.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customerReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast(`Review add successfully...`);
        }
      });
  };

  return (
    <div>
      <div className="md:w-8/12 lg:w-6/12 mx-auto overflow-auto px-5">
        <h2 className="text-3xl font-bold my-5"> Add Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Link</span>
            </label>
            <input
              type="text"
              placeholder="Image Link"
              className="input input-bordered "
              {...register("img", {
                required: {
                  value: true,
                  message: "Image Link is Required",
                },
              })}
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.img.message}{" "}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Review</span>
            </label>
            <textarea
              maxLength="100"
              type="text"
              placeholder="Type Your Review"
              className="input input-bordered "
              {...register("review", {
                required: {
                  value: true,
                  message: "Review is Required",
                },
              })}
            />
            <label className="label">
              {errors.review?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.review.message}{" "}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Give Rating out of 5</span>
            </label>
            <textarea
              maxLength="100"
              type="number"
              placeholder="Type Your Rating"
              className="input input-bordered "
              {...register("rating", {
                required: {
                  value: true,
                  message: "Rating is Required",
                },
              })}
            />
            <label className="label">
              {errors.rating?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.rating.message}{" "}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-48 mx-auto">
            <input className="btn text-white" type="submit" value="ADD" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
