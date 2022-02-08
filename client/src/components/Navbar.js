import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {mobile} from "../Responsive";

const Container = styled.div`
  height: 60px; 
  ${mobile({ height: "50px" })}
  z-index: 99;
  background-color: #161616;
  color: white;
  height: 75px;
  display: flex;
  align-items:center;
  width: 100%;
  ${props => {
        if (props.props?.name === 'Home') return `
        position: absolute;
        top: 0;
        width: 100%;
        color: white;
        background: transparent;
        `
    }}
`
const Wrapper = styled.div`
  padding: 10px 20px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;


`
const Left = styled.div`
  flex: 1;
  display: flex; 
  align-items: center;
`
const Language = styled.span`
  font-size: 14px; 
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex; 
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`

const Center= styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-center: center;
  text-align: center;
  a {
    text-decoration: none;
  }
`
const Logo = styled.h1`
  font-weight: bold;
  text-align:center;
`

const Right = styled.div`
  flex: 1;
  display : flex; 
  align-items: center; 
  justify-content: flex-end;
  a {
    text-decoration: none;
  }
`
const MenuItem = styled.div`
  font-size: 16px; 
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: white;
  .MuiBadge-colorPrimary {
    background-color:red;
    color: white;
  }
`


const Navbar = ({page}) => {

  const quantity = useSelector(state => state.cart.quantity )

  return (
    <Container props={page}>
      <Wrapper>
        <Left>
         <Logo>Beats by Me</Logo>
        </Left>
        <Center>
          <Link to="/products">
            <MenuItem>All Products</MenuItem>
          </Link>
          <Link to="/category">
            <MenuItem>Headphones</MenuItem>
          </Link>
          <Link to="/category">
            <MenuItem>Earphones</MenuItem>
          </Link>
          <Link to="/category">
            <MenuItem>Cameras</MenuItem>
          </Link>
        </Center>
        <Right>
        <Link to="/register">
          <MenuItem>Register</MenuItem>
        </Link>
        <Link to="/login">
          <MenuItem>Sign IN</MenuItem>
        </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>  
      </Wrapper>
    </Container>
  );
};

export default Navbar;
