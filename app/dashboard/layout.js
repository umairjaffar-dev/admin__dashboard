import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import styles from '../components/style/dashboard.module.css'

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
