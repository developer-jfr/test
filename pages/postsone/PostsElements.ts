import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const PostContainer = styled.div`

widht: 10px;
padding-top: 14000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
`
export const PostContent  = styled.h1`
background: #000;
padding-top: 14000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
height: 600px;

&:hover
{
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

`

export const PostBody = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
color: #fff;
`

export const PostInfo = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;
`
export const PostBtn = styled.a`

border-radius: 50px;
background: #09dd85;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;

}
`
export const PostBtnWrap = styled.nav`
padding-top: 20px;
display: flex;
align-items: center;

`
