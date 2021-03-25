import styled from 'styled-components';

export const MealContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`;

export const Frag = styled.div`
  background: linear-gradient(to right, rgba(150, 58, 10, 0.7), #150f0f);
  background-position: center;
  background-size: cover;
`

export const MealWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const MealCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const MealImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  border-radius: 20px;
`;

export const MealHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const MealTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const MealInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const MealDesc = styled.p`
  margin-bottom: 1rem;
`;

export const MealPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const MealButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  border-radius: 10px;
  box-shadow:1px 1px 10px #ccc;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
