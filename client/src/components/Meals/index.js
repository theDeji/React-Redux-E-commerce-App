import React, { useState } from 'react';
import { connect } from 'react-redux' 
import PropTypes from 'prop-types'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import Badge from '@material-ui/core/Badge'


import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { addToCart } from '../../actions/itemActions'
import Meal from './Meal'
import {
  MealContainer,
  MealWrapper,
  MealHeading,
  Frag
} from './MealElements';
import {
BadgeContainer
} from '../Hero/HeroElements';

const Meals = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Frag>
    <BadgeContainer>
        <Badge badgeContent={props.cart.length} color="primary">
          <ShoppingCartRoundedIcon onClick={() => props.history.push('/Cart')}/>
        </Badge> 
      </BadgeContainer> 
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} history={props.history} />
    <MealContainer>
      <MealHeading>Our Hottest Meals, choose your favorite</MealHeading>
      <MealWrapper>
        {props.data.map((meal, index) => {
          return (
            <div key={index}>
              <Meal img={meal.img} name={meal.name} desc={meal.desc} price={meal.price} quantity={meal.quantity} total={meal.total}/>
            </div>
          );
          })}
      </MealWrapper>
    </MealContainer>
    </Frag>
  );
};

const mapStateToProps = (store) =>{
    return {
        data: store.itemsReducer.items,
        cart: store.cartReducer.cart
    }
}

Meals.propTypes = {
  addToCart: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {addToCart})(Meals);
