import React from "react";
import logo from "../assets/fashionism-logo.png";

const NavbarTransaction = () => {
    return (
        <nav className="sticky top-0 z-10 bg-primary px-16 py-6 w-full">
            <div className="flex justify-center items-center">
                <a href="/">
                    <img src={logo} alt="Fashionism Logo" className="w-64" />
                </a>
            </div>
        </nav>
    );
};

export default NavbarTransaction;
