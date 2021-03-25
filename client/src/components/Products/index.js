import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';
import { addToCart } from '../../actions/itemActions'

const Products = (props) => {

  const handleAdd = () => {
    props.addToCart({'img':props.img, 'name':props.name, 'price':props.price, 'desc':props.desc, 'quantity':props.quantity, 'total': props.total})
  }

  return (
      <ProductCard key={props.index}>
        <ProductImg src={props.img} alt={props.alt} />
        <ProductInfo>
          <ProductTitle>{props.name}</ProductTitle>
          <ProductDesc>{props.desc}</ProductDesc>
          <ProductPrice>${props.price}</ProductPrice>
          <ProductButton onClick={handleAdd}>Add to Cart</ProductButton>
        </ProductInfo>
      </ProductCard>
  );
};

const mapStateToProps = (store) =>{
  return {
      cart: store.cartReducer.cart,
      data: store.itemsReducer.features
  }
}

Products.propTypes = {
  addToCart: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {addToCart})(Products);
