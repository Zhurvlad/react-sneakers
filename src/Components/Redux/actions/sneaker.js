import axios from "axios";

export const Constance = {
    SET_SNEAKERS: 'SET_SNEAKERS',
    SET_LOADING:'SET_LOADING',
}

export const fetchSneaker = () =>(dispatch) => {
    dispatch(setLoading(false))
    axios.get('/sneakers').then(({data}) => {
        dispatch(setSneakers(data))
    })
}



export const setSneakers = (Obj) => ({
    type: Constance.SET_SNEAKERS,
    payload: Obj
})
export const setLoading = (payload) => ({
    type: Constance.SET_LOADING,
    payload
})