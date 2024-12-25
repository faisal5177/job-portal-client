import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../assets/jobs-logo.png";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
        .then(() => {
            console.log("Successful sign out");
        })
        .catch((error) => {
            console.log("Sign out failed", error.message);
            alert("Failed to sign out. Please try again.");
        });
};


  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>  
      <li>
      <NavLink to="/myApplications">My Application</NavLink>
      </li> 
      <li><NavLink to='/addJob'>Add A JOb</NavLink></li>  
      <li><NavLink to='/myPostedJobs'>My Posted JObs</NavLink></li>  
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-12" src={logo} alt="Job Portal Logo" />
            <h3>Job Portal</h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleSignOut} className="btn btn-sm">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/register" className="btn btn-sm">
                Register
              </NavLink>
              <NavLink to="/signIn">
                <button className="btn btn-sm ml-5">Login</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
