import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ element }: { element: JSX.Element }) {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('user') !== null;

    return isAuthenticated ? element : <Navigate to="/login" />;
}
