import styled from "styled-components";
import { Navbar} from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: #164e63; 
  padding: 10px 20px;
  color: white;

  .navbar-brand {
    color: white;
  }

  .Nav.Link {
    color: white;
    &:hover {
      color: #ea580c; 
    }
  }
`;

export const Logo = styled.h1`
    font-size: 28px;
    color: white;
`

export const CartNumber = styled.span`
    font-size: 15px;
`

