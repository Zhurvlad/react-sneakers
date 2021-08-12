export const Constance = {
    SNEAKERS_ORDER:'SNEAKERS_ORDER',

}

export const addSneakersOrder = (orderObj) => ({
    type: Constance.SNEAKERS_ORDER,
    payload: orderObj
})
