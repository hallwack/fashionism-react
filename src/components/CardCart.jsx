import React, { useState } from "react";
import jamir from "../assets/JAMIR-V4-Y5-01 1.png";

const CardCart = () => {
    const [itemCounter, setItemCounter] = useState(0);

    const itemPlus = () => {
        setItemCounter(itemCounter + 1);
    };

    const itemMinus = () => {
        if (itemCounter > 0) {
            setItemCounter(itemCounter - 1);
        }
    };

    return (
        <div className="bg-gray-50 rounded-md shadow-md p-5 w-4/5">
            <div className="grid grid-cols-4 border-b border-black border-opacity-50 pb-2 mb-4">
                <h3 className="text-center font-semibold text-lg">Product</h3>
                <h3 className="text-center font-semibold text-lg">Quantity</h3>
                <h3 className="text-center font-semibold text-lg">Price</h3>
                <h3 className="text-center font-semibold text-lg">Total</h3>
            </div>
            <div className="grid grid-cols-4">
                <div className="flex gap-4">
                    <div>
                        <a href="/products/jamir">
                            <img className="h-40" src={jamir} alt="" />
                        </a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <a href="products/jamir">
                            <h2 className="text-lg font-semibold">Jamir</h2>
                            <p>T-Shirt, Men</p>
                        </a>
                        <div>
                            <button type="button" className="underline">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <button type="button" onClick={itemMinus}>
                        <svg
                            className="fill-current text-gray-500 w-4"
                            viewBox="0 0 448 512"
                        >
                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </button>

                    <input
                        className="text-primary w-14 h-9 rounded-md border-sky-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                        type="text"
                        value={itemCounter}
                        readOnly
                    />

                    <button type="button" onClick={itemPlus}>
                        <svg
                            className="fill-current text-gray-500 w-4"
                            viewBox="0 0 448 512"
                        >
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <p>IDR 189,000</p>
                </div>
                <div className="flex justify-center items-center">
                    <p>IDR 189,000</p>
                </div>
            </div>
        </div>
    );
};

export default CardCart;
