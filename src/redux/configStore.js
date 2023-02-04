import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ProjectGameDiceReducer } from "./reducer/ProjectGameDiceReducer";
const rootReducer = combineReducers({
    ProjectGameDiceReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));