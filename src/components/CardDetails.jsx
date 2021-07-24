import React from "react";

const CardDetails = () => {
    return (
        <div class="w-1/3 space-y-4">
            <h1 class="text-5xl font-bold">Jamir</h1>
            <span class="text-sm">Category: T-Shirt, Men</span>
            <p class="leading-snug text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                error minus magnam quisquam aperiam perspiciatis ut nam sed?
                Quidem, debitis.
            </p>
            <p class="text-xl font-medium">Price: IDR 189,000</p>
            <div>
                <button class="px-5 py-2 bg-primary rounded text-white text-lg font-semibold shadow-md hover:shadow-none transition duration-300">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default CardDetails;
