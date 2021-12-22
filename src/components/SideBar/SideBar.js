import React from "react";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.conteiner}>
      ПОДАРОЧНЫЕ КАРТЫ STEAM
      <div className={styles.links}>Теперь и в магазине Steam</div>
      <br />
      РЕКОМЕНДУЕТСЯ
      <div className={styles.links}>Друзьями</div>
      <div className={styles.links}>По меткам</div>
      <br />
      СПИСКИ РЕКОМЕНДАЦИЙ
      <div className={styles.links}>Рекомендации</div>
      <div className={styles.links}>Новинки</div>
      <br />
      КАТЕГОРИИ
      <div className={styles.links}>Лидеры продаж</div>
      <div className={styles.links}>Новинки</div>
      <div>Скоро выйдут</div>
    </div>
  );
}
