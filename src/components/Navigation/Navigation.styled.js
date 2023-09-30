import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 48px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 24px;
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-right: 20px;
`;

export const NavigationTextStyle = styled(Link)`
  text-decoration: none;
  color: darkblue;
  &:hover,
  :focus {
    color: red;
  }
`;
