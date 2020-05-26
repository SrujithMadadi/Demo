import {combineReducers} from "redux";
import HomeReducer from "Store/Reducers/HomeReducer";


const rootReducer=combineReducers({
    homeReducer:HomeReducer
})

export default rootReducer;


