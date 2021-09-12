import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 450px;
  margin-bottom: 10px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  width: 50px;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 100%;
`;

export const User = styled.p`
  color: SlateGrey;
  font-size: 20px;
  font-weight: 500;
`;
export const UserName = styled.span`
  text-transform: uppercase;
  color: DarkSlateGray;
  font-weight: 700;
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 75px;
  margin-left: auto;
  padding: 5px;

  font-size: 15px;
  font-weight: 500;

  color: DodgerBlue;
  border: 2px solid DodgerBlue;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: DodgerBlue;
    border-color: black;
  }
`;
