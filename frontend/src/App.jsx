import React from "react";
import Router from "./MyRouter";
import { Provider} from "react-redux";
import store from "./store/store";
import Traitement from "./Traitement ";

function App() {
  return (
      <Provider store={store}>
        <Traitement />
        <Router />
      </Provider>
  );
}

export default App;
