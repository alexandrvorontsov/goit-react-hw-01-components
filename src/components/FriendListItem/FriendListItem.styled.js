import styled from 'styled-components';

export const FriendItem = styled.li`
  margin: 0 auto;
  width: 50%;
  background-color: ${p => p.theme.colors.white};
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 1px #9b9b9b;
  /* :hover {
    background-color: ${p => p.theme.colors.blue};
  } */

  &:hover{
    background-color: ${p => p.theme.colors.blue};
  }
`;

export const FriendIsOnline = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'red' : 'green')};
  margin: 0 10px;
`;

export const FriendAvatar = styled.img`
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${p => p.theme.colors.primaryText};
`;
