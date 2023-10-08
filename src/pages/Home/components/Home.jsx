import React from "react";
import style from "./home.module.scss";
import Day from "./Day/Day";
import Dayinfo from "./Dayinfo/Dayinfo";

const Home = () => {
  return (
    <div className={style.home}>
      <Day />
      <Dayinfo />
    </div>
  );
};

export default Home;
