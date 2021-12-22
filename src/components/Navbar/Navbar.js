import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hiddenPopupCommunity, setHiddenPopupCommunity] = useState(true);

  return (
    <div className={styles.container}>
      <Link className={styles.links} to={"/"}>
        <img
          alt="icon"
          className={styles.icon}
          src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
        />
      </Link>

      <div className={styles.navbarMenu}>
        <Link className={styles.links} to={"/"}>
          МАГАЗИН
        </Link>
      </div>

      <div className={styles.navbarMenu}>
        <div
          onMouseOver={() => {
            setHiddenPopupCommunity(false);
          }}
          onMouseOut={() => {
            setHiddenPopupCommunity(true);
          }}
        >
          DROP_DOWN
          <div
            hidden={hiddenPopupCommunity}
            className={styles.dropdowncommunity}
            onMouseOver={() => {
              setHiddenPopupCommunity(false);
            }}
            onMouseOut={() => {
              setHiddenPopupCommunity(true);
            }}
          >
            <div className={styles.link}>
              ГЛАВНАЯ
            </div>
            <div className={styles.link}>
              ОБСУЖДЕНИЯ
            </div>
            <div className={styles.link}>
              МАСТЕРСКАЯ
            </div>
            <div className={styles.link}>
              ТОРГОВАЯ ПЛОЩАДКА
            </div>
            <div className={styles.link}>
              ТРАНСЛЯЦИИ
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navbarMenu}>
        <Link className={styles.links} to={"/desires"}>
          СПИСОК ЖЕЛАЕМОГО
        </Link>
      </div>

      <div className={styles.navbarMenu}>
        <Link className={styles.links} to={"/requests"}>
          ЗАПРОСЫ
        </Link>
      </div>

      <div className={styles.downloads}>
        <img
          alt="icon"
          className={styles.iconDownload}
          src="https://svgsilh.com/svg_v2/147745.svg"
        />
        Установить Steam
      </div>

      <img
        alt="icon"
        className={styles.iconDownload}
        src="https://e7.pngegg.com/pngimages/488/625/png-clipart-computer-icons-desktop-email-welcome-letter-angle-rectangle.png"
      />
      <div className={styles.name}>EViL_KoSS</div>
      <img
        alt="icon"
        className={styles.iconUser}
        src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/7f/7fe35d1d68dc0194520a2436d8dae7b7278abd1b.jpg"
      />
    </div>
  );
}
