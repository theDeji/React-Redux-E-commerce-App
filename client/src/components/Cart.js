import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import './style.css'
import Header from './Header'
import { updateCartQty, dropCartQty } from '../actions/itemActions'

const Cart = (props) => {

        const {cart, total} = props

        const incrementPrice = (item) => {
            props.updateCartQty(item)
        }

        const decrementPrice = (item) => {
            props.dropCartQty(item)
        }

        return(
           <>
             <Header />
            <div className="item-reciept">
                {cart.map((item) => {
                    return(
                        <div>
                            <div className="item" key={item.id}>
                                <div className="item-pic">
                                    <img src={item.image} />
                                </div>
                                <div className="cart-item-details">
                                    <h3><b>{item.title}</b></h3>
                                    <h4>${item.price * item.quantity}</h4>
                                    <div className="quantity">
                                        <input type="button" className="decrement" value="-" onClick={() => decrementPrice(item)}/>
                                        <h3 className="value">{item.quantity}</h3>
                                        <input type="button" className="increment" value="+" onClick={() => incrementPrice(item)} /> 
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })}
                <div className="reciept">
                    <h2>Total: ${total}</h2>
                    <input type="button" className="checkout" value="Check out" />
                </div>
            </div>
           </>
        )
    
}


const mapStateToProps = (store) =>{
    return {
        cart: store.cartReducer.cart,
        total: store.cartReducer.total
    }
}

Cart.propTypes = {
    updateCartQty: PropTypes.func.isRequired,
    dropCartQty: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {updateCartQty, dropCartQty})(Cart)
