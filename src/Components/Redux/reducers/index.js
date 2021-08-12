import {combineReducers} from "redux";
import sneaker from "./sneaker";
import cart from "./card";
import favorite from "./favorited";
import orders from "./orders";

const rootReducer = combineReducers({
    sneaker,
    cart,
    favorite,
    orders
})

export default rootReducer;