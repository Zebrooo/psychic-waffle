import React, { ComponentType, FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

interface PrivateRouteProps {
	component: ComponentType<any>;
	// path: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
	const isAuthenticated = useAuth();
	const location = useLocation();

	if (!isAuthenticated) {
		return <Navigate to='/signin' state={{ from: location }} replace />;
	}

	return <Component />;
};
export default PrivateRoute;
