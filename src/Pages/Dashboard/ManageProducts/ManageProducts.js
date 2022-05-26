import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const { isLoading, error, data: products, refetch } = useQuery('tools', () =>
     fetch('https://arcane-eyrie-67329.herokuapp.com/tools')
     .then(res => res.json())
    );

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
      <h2 className="text-3xl text-center font-semibold my-6">Manage Tools and Equipment</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 toolContainer p-5">
        {
            products.map(product => <ManageProduct 
            key={product._id} 
            product={product}
            refetch={refetch}
            ></ManageProduct>)
        }
      </div>
    </div>
    );
};

export default ManageProducts;