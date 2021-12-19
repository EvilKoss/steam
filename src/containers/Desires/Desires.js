import React from "react";
import styles from "./Desires.module.css";
import { connect } from "react-redux";

function Desires(props) {
  const games = props.games.filter((el) => {
    console.log(el.id ,el.desires )
    return el.desires;
  });

  return (
    <div className={styles.Container}>
      {games.map((element) => (
        <div className={styles.game} key={element.id} >
          <img className={styles.img} alt={element.description} src={element.banner} />
          {element.description}
          <button
          className={styles.button}
          onClick={() => {alert("da")}}
        >КУПИТЬ</button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.shop.games,
  };
};

export default connect(mapStateToProps, null)(Desires);
