import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    MealTitle,
    MealCard,
    MealImg,
    MealInfo,
    MealDesc,
    MealPrice,
    MealButton
  } from './MealElements';
import { addToCart } from '../../actions/itemActions'

const Meal = (props) => {

  const handleAdd = () => {
    props.addToCart({'img':props.img, 'name':props.name, 'price':props.price, 'desc':props.desc, 'quantity':props.quantity, 'total': props.total})
  }

  return (
    <>
        <MealCard key={props.index}>
            <MealImg src={props.img} alt={props.alt} />
            <MealInfo>
            <MealTitle>{props.name}</MealTitle>
            <MealDesc>{props.desc}</MealDesc>
            <MealPrice>${props.price}</MealPrice>
            <MealButton onClick={handleAdd}>Add to Cart</MealButton>
            </MealInfo>
        </MealCard>
    </>
  );
};

const mapStateToProps = (store) =>{
  return {
      cart: store.cartReducer.cart,
      data: store.itemsReducer.features
  }
}

Meal.propTypes = {
  addToCart: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {addToCart})(Meal);
