import React from "react";
import s from "../Header/header.module.scss";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select from "react-select";

const Header = () => {
  const options = [
    { value: "city1", label: "Minsk" },
    { value: "city2", label: "Warsaw" },
    { value: "city3", label: "Berlin" },
    { value: "city4", label: "Prague" },
    { value: "city5", label: "Paris" },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
  };

  return (
    <>
      <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <GlobalSvgSelector id="header-logo" />
          </div>
          <div className={s.title}>React weather</div>
        </div>

        <div className={s.wrapper}>
          <div className={s.change_theme}>
            <GlobalSvgSelector id="change_theme" />
          </div>
          <Select
            styles={colourStyles}
            options={options}
            defaultValue={options[0]}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
