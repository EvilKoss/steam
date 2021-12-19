import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hiddenPopupShop, setHiddenPopupShop] = useState(true);
  const [hiddenPopupCommunity, setHiddenPopupCommunity] = useState(true);
  const [hiddenPopupUser, setHiddenPopupUser] = useState(true);

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
        <div
          onMouseOver={() => {
            setHiddenPopupShop(false);
          }}
          onMouseOut={() => {
            setHiddenPopupShop(true);
          }}
        >
          <Link className={styles.links} to={"/"}>
            МАГАЗИН
          </Link>
          <div
            hidden={hiddenPopupShop}
            className={styles.dropdownshop}
            onMouseOver={() => {
              setHiddenPopupShop(false);
            }}
            onMouseOut={() => {
              setHiddenPopupShop(true);
            }}
          >
            <Link className={styles.links} to={"/"}>
              ГЛАВНАЯ
            </Link>
            <br />
            <Link className={styles.links} to={"/recommendations"}>
              РЕКОМЕНДАЦИИ
            </Link>
            <br />
            <a className={styles.links} href={"https://www.google.com"}>
              СПИСОК ЖЕЛАЕМОГО
            </a>
            <br />
            <a className={styles.links} href={"https://www.google.com"}>
              МАГАЗИН ОЧКОВ
            </a>
            <br />
            <a className={styles.links} href={"https://www.google.com"}>
              НОВОСТИ
            </a>
            <br />
            <a className={styles.links} href={"https://www.google.com"}>
              СТАТИСТИКА
            </a>
            <br />
            <a className={styles.links} href={"https://www.google.com"}>
              О STEAM
            </a>
          </div>
        </div>
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
          СООБЩЕСТВО
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
            <Link className={styles.links} to={"https://www.google.com"}>
              ГЛАВНАЯ
            </Link>
            <br />
            <Link className={styles.links} to={"https://www.google.com"}>
              ОБСУЖДЕНИЯ
            </Link>
            <br />
            <Link className={styles.links} to={"https://www.google.com"}>
              МАСТЕРСКАЯ
            </Link>
            <br />
            <Link className={styles.links} to={"https://www.google.com"}>
              ТОРГОВАЯ ПЛОЩАДКА
            </Link>
            <br />
            <Link className={styles.links} to={"https://www.google.com"}>
              ТРАНСЛЯЦИИ
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.navbarMenu}>
        <div
          onMouseOver={() => {
            setHiddenPopupUser(false);
          }}
          onMouseOut={() => {
            setHiddenPopupUser(true);
          }}
        >
          EViL_KoSS
          <div
            hidden={hiddenPopupUser}
            className={styles.dropdownuser}
            onMouseOver={() => {
              setHiddenPopupUser(false);
            }}
            onMouseOut={() => {
              setHiddenPopupUser(true);
            }}
          >
            <Link className={styles.links} to={"https://www.google.com"}>
              АКТИВНОСТЬ
            </Link>
            <br />
            <Link className={styles.links} to={"https://www.google.com"}>
              ПРОФИЛЬ
            </Link>
            <br />
            <Link className={styles.links} to={"https://www.google.com"}>
              ДРУЗЬЯ
            </Link>
            <br />
            <Link className={styles.links} to={"https://www.google.com"}>
              ГРУППЫ
            </Link>
            <br />
            <Link className={styles.links} to={"https://www.google.com"}>
              КОНТЕНТ
            </Link>
            <br />
            <Link className={styles.links} to={"/desires"}>
              ЖЕЛАНИЯ
            </Link>
            <br />
            <Link className={styles.links} to={"https://www.google.com"}>
              ИНВЕНТАРЬ
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.navbarMenu}>
        <div className={styles.links}>ЧАТ</div>
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
