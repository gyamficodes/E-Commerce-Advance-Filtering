import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { IoMenuSharp } from "react-icons/io5";
const Nav = ({ handleInputChange, query, handleShowMenu }) => {



  return (
    <nav className=" flex items-center justify-between px-5 h-full">
      <div className=" flex items-center gap-3">
      <IoMenuSharp  onClick={handleShowMenu} className=" flex xl:hidden text-[30px] cursor-pointer"/>
        <input
          className="search-input pl-2"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className=" flex items-center">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
