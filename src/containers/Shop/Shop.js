import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Shop.module.css";

import BannerPictures from "../../components/BannerPictures/BannerPictures";

function useQuery() {
  const { search } = useLocation();

  
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function Shop(props) {
  const games = props.games;
  let query = useQuery();
  useEffect(() => {
    console.log(query.get('gameId'));
  })
  return (
    <div className={styles.container}>
      <BannerPictures games={games}/>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    games: state.shop.games
  }
}


export default connect(mapStateToProps,null)(Shop)