import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerStyled = styled.div`
margin-right: auto;
margin-left: auto;
margin-top: 50px;
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 8px;
padding: 20px;
background-color: lightgreen;
border: 1px solid lightgreen;
border-radius: 5px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    outline: none;
`

export const TitleStyle = styled.h2`
text-align: center;
`

export const ListElementStyle = styled.li`
font-size: 22px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const UserData = styled.p`
font-size: 28px;
margin-bottom: 44px;
`


export const UserMenuListStyle = styled.ul`
display: flex;
justify-content: space-between;
`

export const UserMenuLinkStyle = styled(Link)`
text-decoration: none;
padding: 4px;
background-color: #fff;
border: 1px solid white;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
border-radius: 5px;
color: red;
&:hover,:focus {
    color: yellow;
    background-color: black;
    border-color: black;
  }
`



