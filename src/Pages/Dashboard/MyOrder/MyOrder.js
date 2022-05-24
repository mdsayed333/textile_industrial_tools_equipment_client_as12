import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Order from './Order';

const MyOrder = ({tool}) => {

    const { isLoading, error, data: orders, refetch } = useQuery('orders', () =>
     fetch('http://localhost:5000/orders')
     .then(res => res.json())
    );

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='px-3'>
            <h2 className='text-4xl text-center'> My Order </h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                {
                    orders.map(order => <Order 
                        key={order._id} 
                        order={order}
                        refetch={refetch}
                        ></Order>)
                }
            

            </div>
        </div>
    );
};

export default MyOrder;