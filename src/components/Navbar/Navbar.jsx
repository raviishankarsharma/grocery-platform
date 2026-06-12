import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { BsSearch } from "react-icons/bs";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const ToggleMenu = () => {
    setShowMenu(!ShowMenu);
  };

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'drop-shadow-lg' : ''}`}>
      <nav className=" max-w-350 mx-auto px-10 md:h-[14vh] h-[12vh] items-center flex justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold tracking-wide">
          Gr<span className="text-orange-500 font-bold">O</span>cify
        </Link>

        {/* Desktop-Menu */}
        <ul className="md:flex gap-x-15 items-center hidden">
          <li>
            <a
              href="/"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/AboutUs"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/Process"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="/ContactUs"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav-Action */}
        <div
          className="flex
             items-center gap-x-5"
        >
          {/* Input-Field */}
          <div className="md:flex border-2 border-orange-500 rounded-full p-1 hidden">
            <input
              type="text"
              name="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className=" bg-linear-to-b from-orange-300 to-orange-600 h-10 w-10 flex items-center justify-center rounded-full text-lg text-white">
              <BsSearch />
            </button>
          </div>

          <a href="/Favourites" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>

          <a href="/Cart" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>

          <a
            href="#"
            className="text-zinc-800 text-2xl md:hidden"
            onClick={ToggleMenu}
          >
            {ShowMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile-Menu */}
        <ul
          className={`flex flex-col gap-y-12 items-center md:hidden absolute top-30 -left-full transform -translate-x-1/2 bg-orange-500/15 backdrop-blur-lg rounded-xl p-10 transition-all duration-500 shadow-xl ${ShowMenu ? "left-1/2" : " "}`}
        >
          <li>
            <a
              href="/"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/AboutUs"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/Process"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="/ContactUs"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex border-2 border-orange-500 rounded-full p-1 md:hidden">
            <input
              type="text"
              name="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className=" bg-linear-to-b from-orange-400 to-orange-600 h-10 w-10 flex items-center justify-center rounded-full text-lg text-white">
              <BsSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
