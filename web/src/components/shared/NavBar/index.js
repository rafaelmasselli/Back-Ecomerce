import React from "react";
import { Nav, Bar, Container, Image } from "./style";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Container>
        <Nav>
          <Bar>
            <Link to="/login">
              <h5>Entrar</h5>
            </Link>
            <Link to="/Perfil">
              <h5>Perfil</h5>
            </Link>
          </Bar>
          <Link to="/">
            <Image src="https://store.akamai.steamstatic.com/public/shared/images/responsive/header_logo.png" />
          </Link>
        </Nav>
      </Container>
    </div>
  );
};

export default NavBar;
