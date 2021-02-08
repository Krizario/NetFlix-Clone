import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="NETFLIX" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGNIN}>Se Connecter</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
