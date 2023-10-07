import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user) {
        return (
            <div>
                {children}
            </div>
        );
    }
    return <h1>its a secret </h1>

}


export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
}