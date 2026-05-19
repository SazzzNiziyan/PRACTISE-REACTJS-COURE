import React from "react";
import style from "./logo.module.css";
import Bookmark from "../BookMark/bookmark";
const logo = (logo) => {
    return (
        <div className={style.Cardtop}>
            <img
                className={style.img}
                src={logo.Logo}
            />
            <Bookmark />
        </div>
    );
};

export default logo;
