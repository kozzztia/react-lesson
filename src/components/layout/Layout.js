import React from 'react';
import styles from "./style.module.scss";
import Header from "../header/Header";

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header/>
        {children}
    </div>
  )
}

export default Layout