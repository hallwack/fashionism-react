import React from "react";

const CardProduct = (props) => {
    return (
        <div className="space-y-2">
            <a
                href={props.productLink}
                className="bg-gray-primary rounded-lg flex justify-center shadow hover:shadow-none transition duration-500"
            >
                <img src={props.image} className="w-72" alt="JARIM-V3-Y5-01" />
            </a>
            <div className="flex flex-row justify-between px-1">
                <p className="text-xl text-primary font-medium">
                    {props.productName}
                </p>
                <p className="text-xl text-primary font-medium">
                    {props.productPrice}
                </p>
            </div>
        </div>
    );
};

export default CardProduct;
