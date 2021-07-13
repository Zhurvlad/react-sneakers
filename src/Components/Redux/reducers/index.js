import {combineReducers} from "redux";
import sneaker from "./sneaker";
import cart from "./card";

const rootReducer = combineReducers({
    sneaker,
    cart
})

export default rootReducer;