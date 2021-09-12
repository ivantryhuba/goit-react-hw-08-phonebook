import styled from '@emotion/styled';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

export const NavLinkStyled = styled.a`
  color: Gray;
  padding: 5px;
  border: 2px solid;
  border-radius: 5px;

  &:hover {
    color: LightSkyBlue;
  }
`;
