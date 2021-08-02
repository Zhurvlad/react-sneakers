export const removeFavoriteSneaker = (id) => ({
    type: 'REMOVE_FAVORITE',
    payload: id
})

export const addSneakerToFavorite = (favoriteObj) => ({
    type: 'ADD_SNEAKER_TO_FAVORITE',
    payload: favoriteObj
})
