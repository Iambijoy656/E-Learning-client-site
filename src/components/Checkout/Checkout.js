import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    const handleCheckOut = () => {
        toast.success('Successfully Checkout')
    }



    return (
        <div className='w-9/12 mx-auto'>
            <h2 className='text-2xl text-violet-900 font-medium text-center my-5'>CheckOut Page</h2>

            <div className='text-xl mb-3'>
                <h4 >User Name: {user?.displayName}</h4>
                <h2>Email: {user.email}</h2>
            </div>
            <button onClick={handleCheckOut} className="btn btn-outline btn-warning">Confirm CheckOut</button>

        </div>
    );
};

export default Checkout;