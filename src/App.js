import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppLayout />
      </Router>
    </Provider>
  );
}

export default App;
