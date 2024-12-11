"useClient";

import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { MdOutlineLogout } from "react-icons/md";

const SignOut = () => {
  const { signOutUser } = useAuth();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="btn btn-ghost"
      onClick={signOutUser}
    >
      <MdOutlineLogout className="size-6 md:size-8" />
    </motion.button>
  );
};

export default SignOut;
