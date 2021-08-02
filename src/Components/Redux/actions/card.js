export const removeSneaker = (id) => ({
    type: 'REMOVE_SNEAKER',
    payload: id
})

export const addSneakerToCart = (sneakersObj) => ({
    type: 'ADD_SNEAKER_TO_CART',
    payload: sneakersObj
})
