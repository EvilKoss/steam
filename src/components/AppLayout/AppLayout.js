import React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./AppLayout.module.css";

import Shop from "../../containers/Shop/Shop";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Recommendations from "../Recommendations/Recommendations";
import Details from "../../containers/Details/Details";
import Requests from "../Requests/Requests";
import EditRequest from "../EditRequest/EditRequest";
import Desires from "../../containers/Desires/Desires";

export default function AppLayout () {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route exact path="/recommendations" component={Recommendations} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/requests" component={Requests} />
          <Route exact path="/requests/:postId" component={EditRequest} />
          <Route exact path="/desires" component={Desires} />
        </Switch>
      </div>
    </div>
  );
}