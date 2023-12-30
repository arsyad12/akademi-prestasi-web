import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false); // initiate isNavOpen state with false
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [dataUser, setDataUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  return (
    <>
      {/* header */}

      <header className="container mx-auto pt-5 pb-5 overflow-hidden">
        <nav className="flex justify-between ">
          <Link to="/">
            <img
              className="px-[15px] md:px-[1px] w-52 h-10 "
              src="/img/logo.png"
              alt="logo"
            />
          </Link>
          {!dataUser ? (
            <div className="invisible md:visible flex gap-3">
              <Link to="/login">
                <button className="p-1 rounded border-4 btn-signin w-1/8 border-cyan-600 bg-cyan-600 text-white">
                  Signin
                </button>
              </Link>
              <Link to="/">
                <button className="p-1 rounded border-4 btn-signup w-1/8  border-cyan-600 bg-cyan-600 text-white">
                  Register
                </button>
              </Link>
            </div>
          ) : (
            <div className="invisible md:visible flex gap-3">
              <button className="p-1 border rounded-full btn-signin w-1/8 border-cyan-600 bg-cyan-600 text-white">
                <img
                  className="w-10 h-10 rounded-full"
                  src={dataUser?.image}
                  alt="userPhoto"
                  onClick={() => setProfileOpen((isFalse) => !isFalse)}
                />

                {profileOpen ? (
                  <ul className="mt-2 p-3 border-2 border-[#FFFFFF] bg-[#FFFFFF] text-[#5E50A1] drop-shadow-md absolute right-0 invisible md:visible mr-10">
                    <Link to={"/profile"}>
                      <li className="mt-[10px]">
                        <button>Profile</button>
                      </li>
                    </Link>
                    <li className="mt-[10px]">
                      <button
                        onClick={() => {
                          localStorage.removeItem("profile");
                          localStorage.removeItem("token");
                          window.location.href = "/";
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                ) : null}
              </button>
            </div>
          )}
          <section className="MOBILE-MENU flex md:hidden ">
            <div
              className="HAMBURGER-ICON h-[50px] w-[50px] pr-4"
              onClick={() => setIsNavOpen((isFalse) => !isFalse)} // toggle isNavOpen state on click
            >
              <img src="/ham.png" alt="" />
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-4 py-1"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-[#5E50A1]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              {dataUser ? (
                <div className="container ">
                  <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                    <Link to={"/profile"}>
                      <p>Profil</p>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                    <Link to={"/"}>
                      <p>Home</p>
                    </Link>
                  </div>
                  <div
                    className="flex items-center justify-center pt-[15px] text-[#5E50A1]"
                    onClick={() => {
                      localStorage.removeItem("profile");
                      localStorage.removeItem("token");
                      window.location.href = "/";
                    }}
                  >
                    <p>Logout</p>
                  </div>
                </div>
              ) : (
                <div className="container ">
                  <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                    <Link to={"/login"}>
                      <p>Signin</p>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                   
                      <p>Register</p>
                  
                  </div>
                </div>
              )}
            </div>
          </section>
        </nav>
      </header>
      {/* header */}
    </>
  );
}

export default Header;
