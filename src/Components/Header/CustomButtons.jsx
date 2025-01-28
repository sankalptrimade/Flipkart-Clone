import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Below button we have used  & > button, & > p, & > div this means inside wrapper component give styling to these HTML elements
// button tag is the actual name used in HTML
// Typography actual name is 'p' tag used in HTML
// Box actual name is 'div' tag used in HTML
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 30px;
`;

const CartContainer = styled(Box)`
  display: flex;
`;

const CustomButtons = () => {
  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ marginTop: "3px", width: "135px" }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: "3px" }}>More</Typography>
      <CartContainer>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </CartContainer>
    </Wrapper>
  );
};

export default CustomButtons;
