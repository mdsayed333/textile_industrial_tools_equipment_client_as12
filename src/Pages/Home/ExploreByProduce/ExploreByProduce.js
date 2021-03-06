import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import "./ExploreByProduct.css";

const ExploreByProduce = () => {
  const {
    isLoading,
    error,
    data: tools,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://arcane-eyrie-67329.herokuapp.com/tools").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleClick = () => {
    console.log("Click is working");
  };
  return (
    <div className="pt-16 pb-10 px-5">
      <h2 className="text-3xl text-center font-bold mb-8">Explore by Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {tools.map((tool, index) => (
          <Link
            to={`/purchase/${tool._id}`}
            key={tool._id}
            onClick={handleClick}
          >
            <div>
              {index < 15 && (
                <div className="card bg-base-100 shadow-xl expCard">
                  <figure style={{ height: "100" }} className="px-10 pt-10">
                    <img
                      style={{ height: "100px" }}
                      src={tool.img}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title hover:link">{tool.name}</h2>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreByProduce;
