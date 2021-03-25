import styled from 'styled-components';
import pizza from '../../images/pizza-1.jpg';
import { Link } from 'react-router-dom';

export const  SignupContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${pizza});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    margin-top:30px;

    h1 {
    font-size: 30px;
    margin-top:20px;
    margin-bottom:20px;
    }

    p {
    margin-bottom: 1rem;
    font-size: 12px;
    }

    input{
        background-color: rgba(0, 0, 0, 0.5);
        color:white;
        width:250px !important;
        padding: 12px;
        border-radius: 10px;
        outline none;
        border:none
    }
`

export const Form = styled.div`
    width: 400px;
    height: 450px;
    background-color:white
    border-radius: 10px;
    box-shadow:1px 1px 10px #ccc;

    h4{
        font-size:12px;
        font-style:italic;
    }

    h4:hover{
        color:blue;
        cursor:pointer;
    }
`

export const FieldImg = styled.div`
    // margin: 20px
`
export const FieldText = styled.div`
    margin: 20px
`

export const Field = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items:center
    
`

export const LoginBtn = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 10px 20px;
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
`;

export const ActionBtns = styled.div`
  padding: 20px;

  p{
      margin: 20px 0;
  }
`;

export const SignupBtn = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 10px 20px;
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
`;