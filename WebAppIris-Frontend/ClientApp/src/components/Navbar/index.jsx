import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem, 
    NavLinks
} from './NavbarElements'

const Navbar = ( {toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='home'
                    smooth={true} 
                    duration={1000} 
                    spy={true} 
                    offset={-80}>iris</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='discover'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            offset={-80}
                            activeClass='active'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            offset={-80}
                            activeClass='active'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='team'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            offset={-80}
                            activeClass='active'>Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='try'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            offset={-80}
                            activeClass='active'>Try it now</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;