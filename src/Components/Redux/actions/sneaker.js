import axios from "axios";

export const fetchSneaker = () =>(dispatch) => {
    dispatch(setLoading(false))
    axios.get('/sneakers').then(({data}) => {
        dispatch(setSneakers(data))
    })
}



export const setSneakers = (Obj) => ({
    type: 'SET_SNEAKERS',
    payload: Obj
})
export const setLoading = (payload) => ({
    type: 'SET_LOADING',
    payload
})