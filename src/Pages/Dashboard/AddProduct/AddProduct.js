import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data1) => {
    const { available, description, img, minimumOrder, price, productName } =
      data1;

    const newProduct = {
      name: productName,
      description: description,
      img: img,
      price: price,
      minimumOrder: minimumOrder,
      available: available,
    };

    fetch("https://arcane-eyrie-67329.herokuapp.com/tools", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast(`Product add successfully...`);
        }
      });
  };

  return (
    <div className="py-10 ">
      <div className="md:w-8/12 lg:w-8/12 mx-auto overflow-auto">
        <h2 className="text-3xl font-bold">Add a Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tools/Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Tool/Product Name"
              className="input input-bordered "
              {...register("productName", {
                required: {
                  value: true,
                  message: "Product Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.productName?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.productName.message}{" "}
                </span>
              )}
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Image Link</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered "
              {...register("img", {
                required: {
                  value: true,
                  message: "Image is Required",
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
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea
              type="textarea"
              placeholder="Type Short Description"
              className="input input-bordered "
              maxLength="100"
              {...register("description", {
                required: {
                  value: true,
                  message: "Short Description is Required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}{" "}
                </span>
              )}
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Minimum Order</span>
            </label>
            <input
              type="number"
              placeholder="Minimum Order"
              className="input input-bordered "
              {...register("minimumOrder", {
                required: {
                  value: true,
                  message: "Minimum Order is Required",
                },
              })}
            />
            <label className="label">
              {errors.minimumOrder?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minimumOrder.message}{" "}
                </span>
              )}
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered "
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}{" "}
                </span>
              )}
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Available Quantity"
              className="input input-bordered "
              {...register("available", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.available?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.available.message}{" "}
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

export default AddProduct;
