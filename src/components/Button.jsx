import React from "react";
import cx from "classname";

const Button = ({
    buttonClass,
    bg,
    shadow,
    isExternal,
    externalLink,
    children,
}) => {
    if (isExternal) {
        return (
            <a
                href={externalLink}
                className={buttonClass}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }
    return (
        <button
            className={cx(buttonClass, {
                "bg-primary text-white focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-opacity-80":
                    bg === "primary",
                "bg-gray-primary text-primary bg-opacity-30 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-opacity-80 focus:ring-offset-primary":
                    bg === "secondary",
                "bg-gray-primary text-white bg-opacity-30": bg === "tertiary",
                "shadow-md hover:shadow-none transition duration-300":
                    shadow === "md",
            })}
        >
            {children}
        </button>
    );
};

export default Button;
