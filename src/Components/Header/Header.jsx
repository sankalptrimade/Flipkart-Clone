import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const ComponentBox = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

// We can't give direct CSS using styled function to HTML tags below is the method how can we give styling to HTML tag using Material UI styled function
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <ComponentBox>
          <img src={logoURL} alt="Logo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="Sub-Logo" />
          </Box>
        </ComponentBox>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
