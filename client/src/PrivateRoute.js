import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';

const PrivateRoute = ({ element: Component }) => {
    const { user } = useAuthContext();

    return user ? Component : <Navigate to="/login" replace />;
};

export default PrivateRoute;
