import produce from "immer";

const initialState = {
    items: [],
    isLoaded: false,
}

const sneaker = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'SET_SNEAKERS':
                draft.items = action.payload;
                draft.isLoaded = true
                break;
            case 'SET_LOADING':
                draft.isLoaded = action.payload
                break;
            default:
        }
    })
}

export default sneaker;
