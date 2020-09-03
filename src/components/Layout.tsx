import React from "react";
import { Wrapper, WrapperVariant } from "./Wrapper";
import { NavBar } from "./Navbar";

interface layoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<layoutProps> = ({ children, variant }) => {
  return (
    <>
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
