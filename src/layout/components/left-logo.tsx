import { useHistory } from "react-router";
import { ProductHome } from "@atlaskit/atlassian-navigation";
import Avatar from "@atlaskit/avatar";
import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";

export const LeftLogo = () => {
  const history = useHistory();
  const handleRedirectToHomePage = () => {
    history.push("/");
  };
  return (
    <ProductHome onClick={handleRedirectToHomePage} icon={Icon} logo={Logo} />
  );
};

const Icon = () => <Avatar src={logo} />;
const Logo = () => {
  return (
    <Div>
      <Avatar src={logo} />
      <span>Dynamic Solutions</span>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
`;
