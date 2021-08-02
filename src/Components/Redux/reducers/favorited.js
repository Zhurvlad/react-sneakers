import produce from "immer";

const initialState = {
    items: [],

}

/*const total = Object.values(draft.items)
    .reduce((result, cartItem) => cartItem.price + result, 0);*/

const favorite = (state = initialState, action) => {
    return produce(state, draft => {
            switch (action.type) {
                case 'ADD_SNEAKER_TO_FAVORITE' :

                    draft.items.push(action.payload);

                    break;

                case 'REMOVE_FAVORITE': {
                    draft.items = draft.items.filter(item => item.id !== action.payload)
                    break;
                }
            }
        }
    )
}

export default favorite;