import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";


const NavBar = () => {
    return (
        <Wrapper>
            {/* </Logo> */}
            <Link to='/home'> Main Page</Link>
            <Nav>
                <Button as={Link} to="/profile">
                    Profile
                </Button>
            </Nav>
        </Wrapper>
    )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar