import React from 'react';
import { toast } from 'react-toastify';

const ManageProduct = ({product, refetch}) => {
    const { name, img, description, price, minimumOrder, _id } = product;

    const handleDelete = () => {
        const confirm = window.confirm("Confirm To Delete Product!");
        console.log(confirm)
        const url = `https://arcane-eyrie-67329.herokuapp.com/tools/${_id}`;
        if(confirm){
            fetch( url, {
                  method: 'DELETE',
                  headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                if(data.deletedCount > 0){
                    toast.success("Successfully Deleted");
    
                }
                refetch();
              })
        }
    }

    
    return (
        <div style={{}} className="card card-compact bg-base-100 shadow-xl ">
          <figure>
            <img style={{ height: "250px" }} src={img} alt="img" />
          </figure>
          <div className="card-body bg-zinc-200">
            <h2 className="card-title text-2xl">{name}</h2>
            <p>{description}</p>
            <p>
              Price: <span className="">{price}</span>
            </p>
            <p>Minimum Order: {minimumOrder}</p>
            <div className="card-actions justify-center">
                <button onClick={handleDelete} className=" myButton">DELETE</button>
            </div>
          </div>
        </div>
    );
};

export default ManageProduct;