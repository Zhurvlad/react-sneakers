import {combineReducers} from "redux";
import sneaker from "./sneaker";
import cart from "./card";
import favorite from "./favorited";

const rootReducer = combineReducers({
    sneaker,
    cart,
    favorite
})

export default rootReducer;