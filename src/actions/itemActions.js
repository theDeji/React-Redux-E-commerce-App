import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QTY, DROP_CART_QTY } from './types'

export const addToCart = (payload) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload
    })
}

export const updateCartQty = (payload) => dispatch => {
    dispatch({
        type: UPDATE_CART_QTY,
        payload
    })
}

export const dropCartQty = (payload) => dispatch => {
    dispatch({
        type: DROP_CART_QTY,
        payload
    })
}