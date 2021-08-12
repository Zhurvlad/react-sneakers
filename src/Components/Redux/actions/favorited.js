export const Constance = {
    REMOVE_FAVORITE: 'REMOVE_FAVORITE',
    ADD_SNEAKER_TO_FAVORITE:'ADD_SNEAKER_TO_FAVORITE',
    CLEAR_CART: 'CLEAR_CART',
}

export const removeFavoriteSneaker = (id) => ({
    type: Constance.REMOVE_FAVORITE,
    payload: id
})

export const addSneakerToFavorite = (favoriteObj) => ({
    type: Constance.ADD_SNEAKER_TO_FAVORITE,
    payload: favoriteObj
})
