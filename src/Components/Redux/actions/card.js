export const Constance = {
    REMOVE_SNEAKERS: 'REMOVE_SNEAKER',
    ADD_SNEAKER_TO_CART:'ADD_SNEAKER_TO_CART',
    CLEAR_CART: 'CLEAR_CART',
}



export const removeSneaker = (id) => ({
    type:  Constance.REMOVE_SNEAKERS,
    payload: id
})

export const addSneakerToCart = (sneakersObj) => ({
    type: Constance.ADD_SNEAKER_TO_CART,
    payload: sneakersObj
})

export const clearCart = (payload) => ({
    type: Constance.CLEAR_CART,
    payload
})
