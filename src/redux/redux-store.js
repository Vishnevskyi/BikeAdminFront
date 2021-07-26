import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BikesReducer } from "./reducers/bikeReducer";
let reducers = combineReducers({
    bikes: BikesReducer
})
let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
export default store;