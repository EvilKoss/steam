import React from "react";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.conteiner}>
      ПОДАРОЧНЫЕ КАРТЫ STEAM
      <a className={styles.links} href={"https://www.google.com"}>
        <div>Теперь и в магазине Steam</div>
      </a><br/>
      РЕКОМЕНДУЕТСЯ
      <a className={styles.links} href={"https://www.google.com"}>
        <div>Друзьями</div>
      </a>
      <a className={styles.links} href={"https://www.google.com"}>
        <div>По меткам</div>
      </a><br/>
      СПИСКИ РЕКОМЕНДАЦИЙ
      <a className={styles.links} href={"https://www.google.com"}>
        <div>Рекомендации</div>
      </a>
      <a className={styles.links} href={"https://www.google.com"}>
        <div>Новинки</div>
      </a><br/>
      КАТЕГОРИИ
      <a className={styles.links} href={"https://www.google.com"} >
        <div>Лидеры продаж</div>
      </a>
      <a className={styles.links} href={"https://www.google.com"} >
        <div>Новинки</div>
      </a>
      <a className={styles.links} href={"https://www.google.com"} >
        <div>Скоро выйдут</div>
      </a>
    </div>
  );
}
