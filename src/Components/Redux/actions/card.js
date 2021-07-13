export const removeSneaker = (id) => ({
    type: 'REMOVE_SNEAKER',
    payload: id
})

export const addSneakerToCart = (pizzaObj) => ({
    type: 'ADD_SNEAKER_TO_CART',
    payload: pizzaObj
})
