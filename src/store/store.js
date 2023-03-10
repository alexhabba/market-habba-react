import {combineReducers, createStore} from "redux";
import {reducerTest} from "./reducer";
import {addNewProductReducer} from "./addNewProductReducer";

const rootReducer = combineReducers({
    root: reducerTest,
    product : addNewProductReducer
})

const store = createStore(rootReducer)
window.store = store
export default store