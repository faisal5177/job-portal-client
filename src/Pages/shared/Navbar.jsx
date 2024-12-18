import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from '../../assets/jobs-logo.png';
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Successful sign out');
      })
      .catch((error) => {
        console.log('Failed to sign out. Stay here. Don’t leave me alone');
      });
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      {user && <li><NavLink to="/profile">Profile</NavLink></li>} 
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {links}
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-12" src={logo} alt="Job Portal Logo" />
            <h3>Job Portal</h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">{links}</div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>
            </>
          ) : (
            <>
              <NavLink to="/register" className="btn btn-sm">
                Register
              </NavLink>
              <NavLink to="/signIn">
                <button className="btn btn-sm ml-5">
                  Login
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
