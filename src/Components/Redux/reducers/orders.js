import produce from "immer";
import {Constance} from "../actions/orders";


const initialState = {
    items: [],

}

/*const total = Object.values(draft.items)
    .reduce((result, cartItem) => cartItem.price + result, 0);*/

const orders = (state = initialState, action) => {
    return produce(state, draft => {
            switch (action.type) {
                case Constance.SNEAKERS_ORDER :
                   draft.items.push(action.payload);
                    break;
                default:
            }
        }
    )
}

export default orders;