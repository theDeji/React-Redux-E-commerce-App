import React from 'react'
import { Link } from "react-router-dom";
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import Badge from '@material-ui/core/Badge'
import { connect } from 'react-redux'

import './style.css'
import Cart from './Cart'

const Header = (props) => {

    return (
        <header>
            <div className="logo">
                <Link to="/ItemList"><h1 style={{color:'white'}}>s!ope.</h1></Link>
            </div>
            <div className="search-cart">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text"/>
                    <input type="submit" value="Go" />
                </form>
                <Badge badgeContent={props.cart.length} color="primary">
                    <Link to='./Cart' style={{color:'white'}}><ShoppingCartRoundedIcon /></Link>
                </Badge>            
            </div>
        </header>
    )
}

const mapStateToProps = (store) =>{
    return {
        cart: store.cartReducer.cart
    }
}

export default connect(mapStateToProps)(Header);
