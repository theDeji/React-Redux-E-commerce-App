import { ADD_TO_CART, REMOVE_FROM_CART } from './types'

export const addToCart = (payload) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload
    })
}
