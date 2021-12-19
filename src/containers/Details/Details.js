import React from "react";
import styles from "./Details.module.css";
import { connect } from "react-redux";
import { toggleWishlist } from "../../redux/reducers/shop";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Details(props) {
  
  let query = useQuery();
  let gameId = parseInt(query.get('gameId'));
  
  const game = props.games.find((el) => {
    return el.id === gameId;
  });
  

  return (
    <div className={styles.Container}>
      <img className={styles.img} alt="pict" src={game.banner} /> 
      <div className={styles.description}>{game.description}</div>
      <div className={styles.description}>цена:{game.price}</div>
      <div className={styles.description}>рейтинг:{game.rating}</div>
      <button className={styles.button}> КУПИТЬ </button>
      <button className={styles.button} onClick={() => {props.toggleWishlist(gameId)}}>  {game.desires ? "убрать из желаемого" : "Добавить в желаемое "}</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    games: state.shop.games
  }
}

const mapDispacthToProps = (dispatch) => {
  return {
    toggleWishlist: (id) => dispatch(toggleWishlist(id)),
  };
};


export default connect(mapStateToProps,mapDispacthToProps)(Details)