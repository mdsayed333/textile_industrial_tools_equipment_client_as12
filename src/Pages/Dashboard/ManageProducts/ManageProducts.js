import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const { isLoading, error, data: products, refetch } = useQuery('tools', () =>
     fetch('http://localhost:5000/tools')
     .then(res => res.json())
    );

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
      <h2 className="text-3xl text-center my-6">Tools and Equipment</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 toolContainer p-5">
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