import "./Header.css";
import React from "react";

import { Link } from "react-router-dom";
import useUserStore from "../../store/user.store";

const Header = () => {
  const user = useUserStore((state) => state.user);
  const logOut = useUserStore((state) => state.logOut);
  return (
    <div className="app-header flex px-4 py-1 bg-light-blue-500 items-center justify-between">
      <Link to={"/"} className="text-white">
        Helped Me ❤️
      </Link>
      {user && (
        <img
          onClick={logOut}
          className="rounded-full h-5/6 hover:opacity-50 cursor-pointer"
          alt="user avatar"
          src={user.photoURL}
        />
      )}
    </div>
  );
};

export default Header;
