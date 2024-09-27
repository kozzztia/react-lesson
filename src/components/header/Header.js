import React from 'react';
import style from "./style.module.scss";
import cat from "../../assets/cat.svg"

const Header = () => {
  return (
    <header className={style.header}>
      <img src={cat} alt="cat" />
      <h2>Blog name</h2>
      <ul>
        <li>
          <a href="#home">
            home
          </a>
        </li>
        <li>
          <a href="#home">
            about
          </a>
        </li>
        <li>
          <a href="#home">
            news
          </a>
        </li>
        <li>
          <a href="#home">
            contacts
          </a>
        </li>
        <li>
          <a href="#home">
            partners
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header