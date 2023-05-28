import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className=" font-sign text-4xl ml-2 ">Shayla</h1>
      </div>

      <ul className="flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium capitalize hover:scale-150 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
