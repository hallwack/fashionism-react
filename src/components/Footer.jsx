import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary mt-20">
            <div className="container flex flex-row mx-auto py-12 justify-between">
                <div className="text-white space-y-6">
                    <a
                        href=""
                        className="flex flex-row items-center space-x-3 text-3xl"
                    >
                        <i className="fab fa-facebook-square"></i>
                        <p className="text-lg font-medium">Facebook</p>
                    </a>
                    <a
                        href=""
                        className="flex flex-row items-center space-x-3 text-3xl"
                    >
                        <i className="fab fa-instagram"></i>
                        <p className="text-lg font-medium">Instagram</p>
                    </a>
                    <a
                        href=""
                        className="flex flex-row items-center space-x-3 text-3xl"
                    >
                        <i className="fab fa-twitter"></i>
                        <p className="text-lg font-medium">Twitter</p>
                    </a>
                    <a
                        href=""
                        className="flex flex-row items-center space-x-3 text-3xl"
                    >
                        <i className="fab fa-whatsapp"></i>
                        <p className="text-lg font-medium">Whatsapp</p>
                    </a>
                </div>
                <div className="flex flex-col space-y-6 text-white text-lg font-medium">
                    <a href="">Help & FAQ</a>
                    <a href="">Sitemap</a>
                    <a href="">Contact Us</a>
                    <a href="">About</a>
                </div>
                <div className="flex flex-col text-white">
                    <h3 className="text-3xl font-semibold">Be First!</h3>
                    <p className="text-lg">
                        Sign up for email alerts for exclusive offers and first
                        access to product
                    </p>
                    <form action="post" className="mt-3">
                        <input
                            type="email"
                            name="inputEmail"
                            id="inputEmail"
                            className="text-primary w-3/5 rounded-md border-sky-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                            placeholder="example@email.com"
                        />
                        <button
                            type="submit"
                            className="ml-2 px-4 py-2 bg-gray-600 rounded text-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <section className="py-0.5 text-center text-primary bg-white">
                Copyright | Raihan Adam 2021
            </section>
        </footer>
    );
};

export default Footer;
