"useClient";

import { useAuth } from "@/context/AuthContext";
//import { motion } from "framer-motion";
import { MdOutlineLogout } from "react-icons/md";

const SignOut = () => {
  const { signOutUser } = useAuth();

  return (
    <button className="btn btn-secondary" onClick={signOutUser}>
      <MdOutlineLogout className="size-6 md:size-8" />
    </button>
  );
};

export default SignOut;
