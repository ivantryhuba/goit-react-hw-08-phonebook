import styled from '@emotion/styled';

export const AuthNavCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

export const AuthNavLink = styled.a`
  color: Gray;
  padding: 5px;
  border: 2px solid;
  border-radius: 5px;

  &:hover {
    color: LightSkyBlue;
  }
`;
