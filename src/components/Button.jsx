import React from "react";
import propTypes from "prop-types";
import cx from "classnames";
import { Link } from "react-router-dom";

const Button = ({
    buttonClass,
    bg,
    shadow,
    isExternal,
    href,
    type,
    children,
    isLoading,
    isDisable,
}) => {
    if (isLoading || isDisable) {
        return (
            <span
                className={cx(
                    `bg-gray-primary text-white bg-opacity-30 ${buttonClass}`,
                    {
                        "flex items-center": isLoading,
                    }
                )}
                disabled={isDisable ? "disabled" : ""}
            >
                {isLoading ? (
                    <>
                        <svg
                            version="1.1"
                            id="loader-1"
                            className="w-8 h-8"
                            viewBox="0 0 50 50"
                        >
                            <path
                                fill="#000"
                                d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
                            >
                                <animateTransform
                                    attributeType="xml"
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 25 25"
                                    to="360 25 25"
                                    dur="0.6s"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </svg>
                        <span className="text-primary ml-2">Loading....</span>
                    </>
                ) : (
                    children
                )}
            </span>
        );
    }
    if (type === "link") {
        if (isExternal) {
            return (
                <a
                    href={href}
                    className={buttonClass}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            );
        } else {
            return (
                <Link to={href} className={buttonClass}>
                    {children}
                </Link>
            );
        }
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
                "shadow-lg hover:shadow-none transition duration-300":
                    shadow === "lg",
            })}
        >
            {children}
        </button>
    );
};

export default Button;

Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    buttonClass: propTypes.string,
    bg: propTypes.string,
    shadow: propTypes.string,
    isExternal: propTypes.bool,
    href: propTypes.string,
    children: propTypes.string,
    isDisable: propTypes.bool,
    isLoading: propTypes.bool,
};
