import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtnLink,
  NavBtn
} from "./../pages/Header/HeaderElements";
import Link from 'next/link'

export default function MainLayout({ children }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>test</NavLogo>
        </NavbarContainer>
        <NavBtn>
          <NavBtnLink ><Link href={'./postsone'}><a>Post</a></Link></NavBtnLink>
      </NavBtn>
      </Nav>
      

      <main>{children}</main>
    </>
  );
}
