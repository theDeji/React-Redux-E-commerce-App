import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = ({history}) => {

  const handleLogin = () => {
    if(localStorage['isLoggedIn'] === 'true'){
      history.push('/Meals')
    }else{
      history.push('/Login')
    }
  }

  return (
    <FeatureContainer>
      <h1>Meal of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton onClick={handleLogin}>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
