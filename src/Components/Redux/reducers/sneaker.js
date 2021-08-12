import produce from "immer";
import {Constance} from "../actions/sneaker";

const initialState = {
    items: [],
    isLoaded: false,
}

const sneaker = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case Constance.SET_SNEAKERS:
                draft.items = action.payload;
                draft.isLoaded = true
                break;
            case Constance.SET_LOADING:
                draft.isLoaded = action.payload
                break;
            default:
        }
    })
}

export default sneaker;
