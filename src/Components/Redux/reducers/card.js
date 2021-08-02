import produce from "immer";


const initialState = {
    items: [],
    totalPrice: 0,
    totalTax: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

/*const total = Object.values(draft.items)
    .reduce((result, cartItem) => cartItem.price + result, 0);*/

const cart = (state = initialState, action) => {
    return produce(state, draft => {
            switch (action.type) {
                case 'ADD_SNEAKER_TO_CART' :

                    draft.items.push(action.payload);

                    draft.totalPrice = getTotalPrice(draft.items)
                    const price = getTotalPrice(draft.items)
                    draft.totalTax = Math.floor(price * 0.2)
                    break;

                case 'REMOVE_SNEAKER': {
                    draft.items = draft.items.filter(item => item.id !== action.payload)
                    draft.totalPrice = getTotalPrice(draft.items)
                    const price = getTotalPrice(draft.items)
                    draft.totalTax = Math.floor(price * 0.2)
                    break;
                }
            }
        }
    )


}


export default cart;

/*
case 'REMOVE_SNEAKER' : {
    const newItems = {
        ...state.items,
    }
    const currentTotalPrice = newItems[action.payload].totalPrice
    delete newItems[action.payload]
    return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,

    }
}*/
