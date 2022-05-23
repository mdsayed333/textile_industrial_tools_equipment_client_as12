import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import Tool from "./Tool";

const Tools = () => {

    const { isLoading, error, data: tools, refetch } = useQuery('tools', () =>
     fetch('http://localhost:5000/tools')
     .then(res => res.json())
    );

    if(isLoading){
        return <Loading></Loading>
    }

  return (
    <div>
      <h2 className="text-3xl text-center my-6">Tools and Equipment</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
