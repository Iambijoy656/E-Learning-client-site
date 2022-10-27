import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-900 mx-auto "></div>
    }



    if (!user) {
        toast.warning('Please Login before going this page')
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

    return children;

};

export default PrivateRoute;