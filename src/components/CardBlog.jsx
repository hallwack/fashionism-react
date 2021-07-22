import React from "react";

const CardBlog = (props) => {
    return (
        <a href={props.link} className={props.classLink} style={props.image}>
            <div className={props.classText}>
                <h3 className="text-3xl font-semibold">{props.title}</h3>
                <p className="text-lg font-medium">{props.highlights}</p>
            </div>
        </a>
    );
};

export default CardBlog;
