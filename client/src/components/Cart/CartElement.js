import styled from 'styled-components';
import ImgBg from '../../images/pizza-3.jpg';

export const CartContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), orange;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const CartContent = styled.div`
  margin: 50px 0;
  // height: calc(100vh - 80px);
  // max-height: 100vh;
  // padding: 0rem calc((100vw - 1300px) / 2);
`;

export const PriceSection = styled.div`
  position: fixed;
  margin-top: 240px;
  margin-left: 750px;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border-radius: 10px;
  box-shadow:1px 1px 10px #ccc;
  padding: 20px;

  h3{
      font-size:1.5rem;
      color: white;
  }
  h1{
    font-size:2rem;
    color: white;
  }

`

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const CartH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3x;
`;

export const CartP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const CartBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 10px;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const ItemCard = styled.div`
  margin: 2rem 5rem;
  line-height: 2;
  display: flex;
  flex-direction:row;
`;

export const ItemImg = styled.img`
  height: 150px;
  min-width: 150px;
  max-width: 50%;
  box-shadow: 4px 4px #fdc500;
  border-radius: 10px;
`;

export const ItemTitle = styled.h2`
  font-weight: 200;
  font-size: 1rem;
  color:white;

`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  text-align: center;
  white-space: nowrap;
`;

export const ItemDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ItemPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color:white;
`;

// export const ItemButton = styled.button`
//   font-size: 1rem;
//   padding: 1rem 4rem;
//   border: none;
//   background: #e31837;
//   color: #fff;
//   transition: 0.2 ease-out;
//   border-radius: 10px;
//   box-shadow:1px 1px 10px #ccc;

//   &:hover {
//     background: #ffc500;
//     transition: 0.2s ease-out;
//     cursor: pointer;
//     color: #000;
//   }
// `;

export const ItemQty = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  padding: 0 20px;
`

export const AddBtn = styled.div`
  background: #e31837;
  white-space: nowrap;
  padding: 10px 0;
  width:50px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-radius:10px;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }
  
`

export const SubBtn = styled.div`
  background: #e31837;
  white-space: nowrap;
  padding: 10px 0;
  width:50px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-radius:10px;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }
`

export const CheckOutBtn = styled.div`
  background: #e31837;
  white-space: nowrap;
  padding: 10px 20px;
  margin: 35px 50px;
  color: #fff;
  font-size: 16px;
  text-align:center;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-radius:10px;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }

`
export const ItemButtons = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:20px;
    padding: 0 20px;
    text-align: center;

    @media screen and (max-width: 480px) {
      grid-template-rows: repeat(2, 30px);
    }
`
