import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/authProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">Auth Master</button>
                <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
                {user &&
                    <Link className="btn btn-ghost text-xl" to='/orders'>Orders</Link>
                }
                {user &&
                    <Link className="btn btn-ghost text-xl" to='/userprofile'>Profile</Link>
                }
                <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
                {
                    user ? <div>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                    </div> : <Link to='/login'>Login</Link>

                }
            </div>
        </div>
    );
};

export default Header;