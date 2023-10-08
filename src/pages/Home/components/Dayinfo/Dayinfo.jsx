import React from "react";
import s from "../Dayinfo/dayinfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";

const Dayinfo = () => {
  return (
    <header className={s.this__day__info}>
      <div className={s.this__day_info_items}></div>
      <img src={cloud} alt="cloud" />
    </header>
  );
};

export default Dayinfo;
