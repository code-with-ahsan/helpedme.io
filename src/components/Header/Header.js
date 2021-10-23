import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-header flex px-4 py-1 bg-light-blue-500 items-center justify-between">
      <Link to={"/"} className="text-white">
        Helped Me ❤️
      </Link>
      <img
        className="rounded-full h-5/6"
        alt="user avatar"
        src="https://avatars.githubusercontent.com/u/9844254?v=4"
      />
    </div>
  );
};

export default Header;
