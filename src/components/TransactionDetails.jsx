import React from "react";

const TransactionDetails = () => {
    return (
        <div className="bg-primary rounded-md shadow-md w-1/5 p-5 text-white">
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
            <button
                type="submit"
                className="w-full px-4 py-2 bg-gray-500 rounded text-lg font-medium"
            >
                Checkout
            </button>
        </div>
    );
};

export default TransactionDetails;
