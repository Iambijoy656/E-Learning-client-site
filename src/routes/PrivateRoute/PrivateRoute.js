import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <div>Loading......</div>
    }



    if (!user) {
        toast.warning('Please Login before going this page')
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

    return children;

};

export default PrivateRoute;