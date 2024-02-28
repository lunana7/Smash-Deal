import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="h-[10vh] shadow-xl bg-gray-100  margin-0">
        <div className="footer w-full md:w-9/12 mx-auto flex items-center justify-between">
          <section className="md:gap-4">
            <h1 className="logo  md:text-3xl normal-case ">
              <span className="text-teal-600">SmashDeals</span>
            </h1>
          </section>
          <div>
            <ul className="flex items-center gap-x-6">
              <li className="hidden lg:block text-grey-600 text-xs md:text-xl">
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li className="hidden lg:block text-grey-600 text-xs md:text-xl">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="md:gap-2">
            <p className="text-grey-600 text-xs md:text-xl">
              © 2022 SmashDeals
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
