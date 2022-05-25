import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const ManageAllOrders = () => {
    const { isLoading, error, data: products, refetch } = useQuery('tools', () =>
     fetch('http://localhost:5000/orders')
     .then(res => res.json())
    );

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-4xl text-center'> Manage All Orders </h2>
        </div>
    );
};

export default ManageAllOrders;