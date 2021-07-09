import React from "react";
import Link from 'next/link';


import {
  Nav,
  NavLogo,
  NavbarContainer,
  
  NavBtn,
  NavBtnLink,
} from "./HeaderElements";
import style from './header.module.css';
export const Header = ({ children}) => {

 

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>dev</NavLogo>

       
           <Link href={'/postsone'}><a>Post</a></Link>
         
         
        </NavbarContainer>
       
      </Nav>
     
    </>
  );
};


