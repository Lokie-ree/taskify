import { useAuth } from "@/context/AuthContext";
import { FaGoogle } from "react-icons/fa6";

const signInGoogle = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <button className="btn" onClick={signInWithGoogle}>
      <FaGoogle />Sign In
    </button>
  );
};

export default signInGoogle;

