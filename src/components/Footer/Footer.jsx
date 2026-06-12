import React from "react";
import { IoIosArrowForward } from "react-icons/io";


const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap gap-y-12 max-w-350 mx-auto px-10">
        <div className="flex-1 basis-75">
          <a href="#" className="text-3xl font-semibold tracking-wide">
            Gr<span className="text-orange-500 font-bold">O</span>cify
          </a>

          <p className="text-zinc-600 mt-6 max-w-87.5 ">
            Bred for a high content of beneficial substance, Our products are
            all fresh and healthy.
          </p>

          <p className="text-zinc-800 mt-6">2026 &copy; All Rights Reserved</p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl  font-bold">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 mt-6">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 mt-6">
              FAQ
            </a>
          </li>
        </ul>
        <ul className="flex-1 ">
          <li>
            <h5 className="text-zinc-800 text-2xl  font-bold">Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 mt-6">
              Support Centre
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 mt-6">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 mt-6">
              Contact Us
            </a>
          </li>
        </ul>

        <div>
          <h5 className="text-zinc-800 text-2xl  font-bold">Stay Connected</h5>

          <p className="text-zinc-600 mt-6">
            Questions or Feedback?
            <br />
            We'd love to hear from you.
          </p>

          <div className="bg-white mt-6 flex rounded-lg p-1">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="example@gmail.com"
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
            />
            <button className="bg-linear-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer">
                <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
