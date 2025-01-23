import { useAuth } from "@/context/AuthContext";
import { FaGoogle } from "react-icons/fa6";

const signInGoogle = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <button className="btn btn-primary" onClick={signInWithGoogle}>
      <FaGoogle />
      Continue with Google
    </button>
  );
};

export default signInGoogle;
