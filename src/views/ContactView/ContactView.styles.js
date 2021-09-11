import styled from '@emotion/styled';

export const ContactListStyled = styled.ul`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  font-size: 40px;
  font-weight: 700;
  color: black;
`;

export const ContactItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 500;
  color: black;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const RemoveBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 75px;
  margin-left: auto;
  padding: 5px;

  font-size: 15px;
  font-weight: 500;

  background-color: Orange;
  border: 2px solid orangered;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: white;
    border-color: black;
    background-color: orangered;
  }
`;
