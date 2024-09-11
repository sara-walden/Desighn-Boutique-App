import {createStore} from "redux";
import allReducers from "../designBoutique/reducer/allReducers"

const store=createStore(
    allReducers,
  );
  store.getState();


export default store;
  