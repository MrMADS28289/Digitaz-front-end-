import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';

const PrivateRoute = [
    { name: 'Dashboard', path: '/dashboard', Component: Dashboard },
    { name: 'Profile', path: '/profile', Component: Profile },
]

export default PrivateRoute;