import produce from "immer";
import {Constance} from "../actions/favorited";


const initialState = {
    items: [],

}

/*const total = Object.values(draft.items)
    .reduce((result, cartItem) => cartItem.price + result, 0);*/

const favorite = (state = initialState, action) => {
    return produce(state, draft => {
            switch (action.type) {
                case Constance.ADD_SNEAKER_TO_FAVORITE :

                    draft.items.push(action.payload);

                    break;

                case Constance.REMOVE_FAVORITE:
                    draft.items = draft.items.filter(item => item.id !== action.payload)
                    break;
                default:
            }
        }
    )
}

export default favorite;