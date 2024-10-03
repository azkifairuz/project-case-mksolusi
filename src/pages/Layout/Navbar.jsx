import logo from "@/assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavbarOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navbarData = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <>
      <nav className="bg-white p-4  flex flex-col md:flex-row justify-center w-full">
        <div className="w-full flex justify-between md:justify-between md:w-[80%] items-center">
          <Link to="/" className="cursor-pointer">
            <img className="w-14 h-15" src={logo} />
          </Link>
          <div className="md:flex  hidden gap-5">
            <ul className=" md:flex justify-center gap-10">
              {navbarData.map((data, index) => {
                return (
                  <Link
                    to={data.href}
                    key={index}
                    className="cursor-pointer py-3 text-sm text-[#666666]"
                  >
                    {data.title}
                  </Link>
                );
              })}
            </ul>
            <Link to={"/auth"}>
              <button className="bg-primary rounded-lg py-2 px-4 text-white">
                Login
              </button>
            </Link>
          </div>
          <button onClick={handleNavbarOpen} className="md:hidden">
            {isNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 28 28"
                strokeWidth="1.5"
                stroke="#666666"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                fill="#666666"
                className="size-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            isNavOpen ? "flex" : "hidden"
          } md:hidden flex-col py-4 `}
        >
          {navbarData.map((data, index) => {
            return (
              <Link
                to={data.href}
                key={index}
                className="cursor-pointer py-3 text-xs text-[#666666]"
              >
                {data.title}
              </Link>
            );
          })}
                 <Link to={"/auth"}>
              <button className="bg-primary rounded-lg py-2 px-4 text-white">
                Login
              </button>
            </Link>
        </ul>
      </nav>
    </>
  );
}
