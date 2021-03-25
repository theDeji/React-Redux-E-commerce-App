import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import Badge from '@material-ui/core/Badge'
import { connect } from 'react-redux'


import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
  BadgeContainer
} from './HeroElements';
import Products from '../Products'
import Feature from '../Feature';

const Hero = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <HeroContainer>
      <BadgeContainer>
        <Badge badgeContent={props.cart.length} color="primary">
          <ShoppingCartRoundedIcon onClick={() => props.history.push('/Cart')}/>
        </Badge> 
      </BadgeContainer> 
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} history={props.history} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Best Meals, FOR YOU</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
            <HeroBtn onClick={() => props.history.push('/Meals')}>View Catalogue</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
    <Feature history={props.history} />
    <ProductsContainer>
      <ProductsHeading>Sweet Treats for You</ProductsHeading>
      <ProductWrapper>
          {props.items.map((meal, index) => {
          return (
            <div key={index}>
              <Products img={meal.img} name={meal.name} desc={meal.desc} price={meal.price} quantity={meal.quantity} total={meal.total}/>
            </div>
          )
          })}
      </ProductWrapper>
    </ProductsContainer>
    </>
  );
};

const mapStateToProps = (store) =>{
  return {
      cart: store.cartReducer.cart,
      items: store.itemsReducer.features

  }
}

export default connect(mapStateToProps)(Hero);
