import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions/itemActions'

import './style.css'
const Item = (props)  => {

    const handleAdd = () => {
        props.addToCart({'image':props.image, 'title':props.title, 'price':props.price, 'quantity':props.quantity, 'total': props.total})
    }

    return(
        <div className="card-container">
            <div className="card">
                <img src={props.image}/>
                <div className="item-details">
                    <h4><b>{props.title}</b></h4>
                    <p>${props.price}</p>
                </div>
                <input type="submit" value="ADD TO CART" onClick={handleAdd} />
            </div>
        </div>
    )
}

const mapStateToProps = (store) =>{
    return {
        cart: store.cartReducer.cart
    }
}

Item.propTypes = {
    addToCart: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {addToCart})(Item);