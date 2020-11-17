import React, { Component, useState } from 'react'
import {connect} from 'react-redux'

import './style.css'

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {quantity: 1, viewTotal: 0};
    }

    
    render() {
        const {cart} = this.props
        let initialTotal = 0
        let tempQuantity  = 0

        cart.forEach(item => {
          initialTotal += +(item.price)
        //   this.setState({viewTotal: initialTotal})
        });
        
        const incrementPrice = (item) => {
            tempQuantity += 1
            this.state.quantity = tempQuantity
            initialTotal += +(item.price)
            console.log(initialTotal)
        }

        const decrementPrice = (price) => {
        }


        return(
            <div>
                {cart.map((item) => {
                    return(
                        <div>
                            <div className="item" key={item.id}>
                                <div className="item-pic">
                                    <img src={item.image} />
                                </div>
                                <div className="cart-item-details">
                                    <h3><b>{item.title}</b></h3>
                                    <h4>${item.price}</h4>
                                    <div className="quantity">
                                        <input type="button" className="decrement" value="-" onClick={() => decrementPrice(item)}/>
                                        <h3 className="value">{this.state.quantity}</h3>
                                        <input type="button" className="increment" value="+" onClick={() => incrementPrice(item)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    
}


const mapStateToProps = (store) =>{
    return {
        cart: store.cartReducer.cart
    }
}

export default connect(mapStateToProps)(Cart)

// cart.forEach(item => {
//     return(
        // <div>
        //     <div className="item-pic">
        //         <img>{item.img}</img>
        //     </div>
        //     <div className="item-details">
        //         <h4><b>{item.title}</b></h4>
        //         <p>${item.price}</p>
        //     </div>
        // </div>
//     )
// });