import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types'
const initialCartState = {
    cart: []
}
export default function cartReducer(state = initialCartState, action) {
    switch(action.type){
        case ADD_TO_CART:
            const exists = state.cart.find(item => item.title == action.payload.title)
            
            if(!exists){
                Object.assign(state, {
                    cart: [...state.cart, action.payload]
                })
            }
            return {...state}
        default:
            return state
    }
}