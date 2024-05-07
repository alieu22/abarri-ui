import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

// This component will be responsible for checking authentication
// and rendering the child routes if the user is authenticated.
const ProtectedRoute = ({ isAuth }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuth) {
      navigate('/admin');
    }
  }, [isAuth, navigate]);

  return isAuth ? <Outlet /> : null;
};

export default ProtectedRoute;