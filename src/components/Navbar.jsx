import React from "react";
import Cart from "./Cart";
import User from "./User";
import logo from "../assets/fashionism-logo.png";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-10 bg-primary px-16 py-6 w-full">
            <div className="flex justify-between items-center">
                <a href="/">
                    <img src={logo} alt="Fashionism Logo" className="w-64" />
                </a>
                <div>
                    <ul className="flex flex-row text-white space-x-12 text-lg font-semibold mr-36">
                        <li>
                            <a href="/category/men">MEN</a>
                        </li>
                        <li>
                            <a href="/category/women">WOMEN</a>
                        </li>
                        <li>
                            <a href="/category/kids">KIDS</a>
                        </li>
                        <li>
                            <a href="/about">ABOUT</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row text-white space-x-12">
                    <Cart />
                    <User />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
