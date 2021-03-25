import React, { useState } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import Badge from '@material-ui/core/Badge'


import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { updateCartQty, dropCartQty } from '../../actions/itemActions'
import {
    AddBtn,
    SubBtn,
    ItemCard,
    ItemImg,
    ItemInfo,
    ItemTitle,
    ItemPrice,
    ItemButtons,
    CartContainer,
    CartContent,
    PriceSection,
    CheckOutBtn,
} from './CartElement'
import { BadgeContainer } from '../Hero/HeroElements'
import { Frag } from '../Meals/MealElements'


const Cart = (props) => {

    const {cart, total} = props
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const incrementPrice = (meal) => {
        props.updateCartQty(meal)
    }

    const decrementPrice = (meal) => {
        props.dropCartQty(meal)
    }

    return(
        <Frag>
            <BadgeContainer>
                <Badge badgeContent={props.cart.length} color="primary">
                    <ShoppingCartRoundedIcon/>
                </Badge> 
            </BadgeContainer> 
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} history={props.history} />
            <CartContainer>
                <CartContent>
                    {cart.map((meal) => {
                        return(
                            <ItemCard>
                                <ItemImg src={meal.img}/>
                                <ItemInfo>
                                    <ItemTitle>{meal.name}</ItemTitle>
                                    <ItemPrice>Price * Qty({meal.quantity}): ${meal.price * meal.quantity}</ItemPrice>
                                    <ItemButtons>
                                        <AddBtn onClick={() => incrementPrice(meal)}>+</AddBtn>
                                        <SubBtn onClick={() => decrementPrice(meal)}>-</SubBtn>
                                    </ItemButtons>
                                </ItemInfo>
                            </ItemCard>
                        )
                    })}
                </CartContent>
                <PriceSection>
                    <h3>Total:</h3>
                    <h1>${total}</h1>
                    <CheckOutBtn>Check out</CheckOutBtn>
                </PriceSection>
            </CartContainer>
        </Frag>
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