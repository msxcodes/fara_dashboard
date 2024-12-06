import React, { useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const navLinks = [
    {
      label: "Dashboard",
      href: "/",
      active: location.pathname === "/" ? true : false,
      icon: "images/dashboard@2x.png",
    },
    {
      label: "Upload Files",
      href: "/upload-files",
      active: location.pathname === "/upload-files" ? true : false,
      icon: "images/upload@2x.png",
    },
  ];

  return (
    <nav className="navbar flex h-[45px] justify-between items-center px-[30px] py-[11px]">
      <div className="w-[260px</a>] h-[45px]">
        <Link to="/">
          <img
            src="images/logo@2x.png"
            alt=""
            className="size-full object-center"
          />
        </Link>
      </div>
      <div>
        <ul className="flex gap-x-8">
          {navLinks.map((items, index) => {
            return (
              <li
                key={index}
                className="border-r-2  pr-6 flex justify-center items-center border-black gap-2"
              >
                <div
                  className={`${
                    items.active ? "border-b-2" : "border-none opacity-50"
                  } flex items-center gap-2 pb-1 border-[#06c6cb]`}
                >
                  <div className="size-[15px]">
                    <img
                      src={items.icon}
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <Link
                    to={items.href}
                    className="text-white textStyle-regular font-[600]"
                  >
                    {items.label}
                  </Link>
                </div>
              </li>
            );
          })}
          <li>
            <div className="w-[140px] h-[26px]">
              <img src="images/insurance-Next-white@2x.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
