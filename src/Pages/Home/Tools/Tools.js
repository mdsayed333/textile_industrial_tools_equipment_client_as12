import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import Tool from "./Tool";

const Tools = () => {

    const { isLoading, error, data: tools, refetch } = useQuery('tools', () =>
     fetch('https://arcane-eyrie-67329.herokuapp.com/tools')
     .then(res => res.json())
    );

    if(isLoading){
        return <Loading></Loading>
    }

  return (
    <div className="p-5 toolContainer">
      <h2 className="text-4xl text-center my-8 font-bold pt-12">Tools and Equipment</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 toolContainer">
        {
            tools.map((tool, index) => <Tool 
            key={tool._id} 
            tool={tool}
            index={index}
            ></Tool>)
        }
      </div>
    </div>
  );
};

export default Tools;
