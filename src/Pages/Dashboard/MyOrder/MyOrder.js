import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Order from './Order';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const url = `https://arcane-eyrie-67329.herokuapp.com/orders/${user.email}`
    const { isLoading, error, data: orders, refetch } = useQuery('orders', () =>
     fetch(url)
     .then(res => res.json())
    );

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='px-3 py-5'>
            <h2 className='text-4xl text-center my-5'> My Order </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
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