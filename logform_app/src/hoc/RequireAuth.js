import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isLogged = localStorage.getItem('isLogged');

  if (isLogged === 'isOuted') {
    return <Navigate to='/LoginForm' state={{ from: location }} />
  }

  return children;
}

export { RequireAuth };