import React from 'react';
import style from "./style.module.scss";
import cat from "../../assets/cat.svg"

const Header = () => {
  return (
    <header className={style.header}>
      <img src={cat} alt="cat"/>
      <h2>Blog name</h2>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>news</li>
        <li>contacts</li>
        <li>partners</li>
      </ul>
    </header>
  )
}

export default Header