import React from "react";

const TransactionDetails = () => {
    return (
        <div className="bg-primary rounded-md shadow-md w-3/12 p-5 text-white">
            <h2 className="text-2xl font-bold border-b border-white pb-3 mb-3">
                Order Summary
            </h2>
            <div className="grid grid-cols-1 grid-flow-row mb-3">
                <div className="flex justify-between">
                    <p>Total Cart</p>
                    <p>IDR 189,000</p>
                </div>
                <div className="flex justify-between border-b border-white pb-3 mb-4">
                    <p>Shipping</p>
                    <p>IDR 40,000</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-lg font-medium">Total</p>
                    <p className="text-lg font-medium">IDR 229,000</p>
                </div>
            </div>
            <div className="flex gap-4 justify-between">
                <button
                    type="submit"
                    className="px-4 py-2 w-2/5 bg-gray-primary bg-opacity-30 rounded text-lg font-medium text-white"
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="px-5 py-2 w-3/5 font-inter bg-gray-primary text-primary rounded text-lg font-semibold shadow-md hover:shadow-none transition duration-300 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-opacity-80 focus:ring-offset-primary"
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default TransactionDetails;
