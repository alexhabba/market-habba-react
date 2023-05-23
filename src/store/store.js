import {combineReducers, createStore} from "redux";
import {reducerTest} from "./reducer";
import {addNewProductReducer} from "./addNewProductReducer";
import {userReducer} from "./user";

const rootReducer = combineReducers({
    root: reducerTest,
    product : addNewProductReducer,
    user: userReducer
})

const store = createStore(rootReducer)
window.store = store
export default store