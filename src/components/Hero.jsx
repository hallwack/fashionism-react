import React from "react";
import menBannerLeft from "../assets/men-banner-left.png";
import womenBannerRight from "../assets/women-banner-right.png";

const Hero = () => {
    return (
        <section className="w-full bg-gray-100">
            <div className="flex flex-row justify-between">
                <img
                    src={menBannerLeft}
                    className="w-3/12"
                    alt="Men Banner Model"
                />
                <div className="flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-6xl font-extrabold text-primary">
                        The Future of Fashion
                    </h1>
                    <p className="text-primary font-medium text-xl">
                        Choose your best fits here!
                    </p>
                    <button className="px-4 py-2 bg-primary rounded text-white font-semibold shadow-md hover:shadow-none transition duration-300">
                        EXPLORE NOW
                    </button>
                </div>
                <img
                    src={womenBannerRight}
                    className="w-3/12"
                    alt="Women Banner Model"
                />
            </div>
        </section>
    );
};

export default Hero;
