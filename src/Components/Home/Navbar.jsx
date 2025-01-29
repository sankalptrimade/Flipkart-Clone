import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../Constants/data.js";

const ComponentBox = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between
`;

const ContainerBox = styled(Box)`
    padding: 12px 8px;
    text-align: center
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
`;

const Navbar = () => {
  return (
    <ComponentBox>
      {navData.map((data, index) => {
        return (
          <ContainerBox key={index}>
            <img src={data.url} alt="nav" style={{width: "64px"}}/>
            <Text>{data.text}</Text>
          </ContainerBox>
        );
      })}
    </ComponentBox>
  );
};

export default Navbar;
