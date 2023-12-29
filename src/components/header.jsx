import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false); // initiate isNavOpen state with false

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
          <div className="invisible md:visible flex gap-3">
            <Link to="/login">
              <button className="p-1 rounded border-4 btn-signin w-1/8 border-cyan-600 bg-cyan-600 text-white">
                Masuk
              </button>
            </Link>
            <Link to="/">
              <button className="p-1 rounded border-4 btn-signup w-1/8  border-cyan-600 bg-cyan-600 text-white">
                Daftar
              </button>
            </Link>
          </div>

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
              <div className="container ">
                <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                  <Link href={"/"}>
                    <p>HOME</p>
                  </Link>
                </div>
                <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                  <Link href={"/login"}>
                    <p>Signin</p>
                  </Link>
                </div>
                <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                  <Link href={"/signup"}>
                    <p>Signup</p>
                  </Link>
                </div>
                <div className="flex items-center justify-center pt-[15px] text-[#5E50A1]">
                  <Link href={"/talent-list"}>
                    <p>Talent List</p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </nav>
      </header>
      {/* header */}
    </>
  );
}

export default Header;
