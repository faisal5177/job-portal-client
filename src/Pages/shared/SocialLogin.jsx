import { useContext } from "react";
import googleLogo from "../../assets/google-logo.png";
import AuthContext from "../../context/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="m-4">
      <div className="divider">OR</div>

      <button onClick={handleGoogleSignIn} className="btn font-semibold">
        <img className="w-[24px]" src={googleLogo} alt="" />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
