'useClient'

import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const SignOut = () => {
  const { signOutUser } = useAuth();

  return (
    <motion.button
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.9}}
      className="btn"
      onClick={signOutUser}
    >
      <IoMdClose />
    </motion.button>
  );
};

export default SignOut;