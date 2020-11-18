import { ADD_TO_CART, DROP_CART_QTY, REMOVE_FROM_CART, UPDATE_CART_QTY } from '../actions/types'
const initialCartState = {
    cart: [],
    total: 0
}

export default function cartReducer(state = initialCartState, action) {
    switch(action.type){
        case ADD_TO_CART:
            const item = state.cart.find(item => item.title == action.payload.title)
            if(!item){
                Object.assign(state, {
                    cart: [...state.cart, action.payload],
                    total: state.total + action.payload.price
                })
            }else{
                item.quantity = item.quantity + 1
                const newState = state.cart.map(cartItem =>{
                    if(item.id == cartItem){
                        return item
                    }else{
                        return cartItem
                    }
                })

                Object.assign(state,{
                    cart: [...newState]
                })
            }
            return {...state}
        case UPDATE_CART_QTY:
            const newItem = state.cart.find(item => item.title == action.payload.title)
            if(!newItem){
                return null
            }else{
                Object.assign(state, {
                    total: state.total + action.payload.price
                })
                newItem.quantity = newItem.quantity + 1
                const newState = state.cart.map(cartItem =>{
                    if(newItem.id == cartItem){
                        return newItem
                    }else{
                        return cartItem
                    }
                })

                Object.assign(state,{
                    cart: [...newState]
                })
            }
            return {...state}
        case DROP_CART_QTY:
            const newItem_ = state.cart.find(item => item.title == action.payload.title)
            if(!newItem_){
                return null
            }else{
                if(newItem_.quantity === 0 ){
                   console.log('can not decrease')
                }else{
                    newItem_.quantity = newItem_.quantity - 1
                    Object.assign(state, {
                        total: state.total - action.payload.price
                    })
                }
                
                const newState = state.cart.map(cartItem =>{
                    if(newItem_.id == cartItem){
                        return newItem_
                    }else{
                        return cartItem
                    }
                })

                Object.assign(state,{
                    cart: [...newState]
                })
            }
            return {...state}

        default:
            return state
    }
}