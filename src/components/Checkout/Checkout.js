import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const course = useLoaderData();
    const { course_name, picture, tutor, price } = course;
    const { user } = useContext(AuthContext)
    console.log(user)

    const handleCheckOut = () => {
        toast.success('Successfully Checkout')
    }



    return (
        <div className='w-9/12 mx-auto bg-gray-200 my-5 p-10'>


            <div className='text-xl mb-10'>
                <h1 className='text-center text-2xl font-bold'>
                    Welcome <span className="text-violet-700">{user?.displayName}</span>, to the
                    checkout page.
                </h1>
            </div>
            <div className='flex justify-center items-center my-5'>
                <div className="max-w-lg p-4 shadow-md bg-thite text-gray-900 text-center">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <Link rel="noopener noreferrer" to="#" className="mb-0 capitalize text-gray-900">Please Confirm Checkout</Link>
                        </div>
                        <Link rel="noopener noreferrer" to="#"> Tutor: {tutor} </Link>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={picture} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>Duration: 4 hours</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Link rel="noopener noreferrer" to="#" className="block">
                                <h3 className="text-xl font-semibold text-violet-800">{course_name}</h3>
                            </Link>
                            <p className="leading-snug text-gray-500 my-3"> Price:{price}Tk </p>

                            <button onClick={handleCheckOut} className="btn btn-outline btn-info">Confirm Checkout</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;