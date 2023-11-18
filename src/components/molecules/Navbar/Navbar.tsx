import React from 'react'
import * as Styled from './Navbar.styled';
import NavBrandImage from '../../atoms/NavBrandImage/NavBrandImage';
import { Container } from '../../atoms/Container/Container.styled';
import Navs from '../../atoms/Navs';
import NavItem from '../../atoms/NavItem';
import IconButtonFloatingBadge from '../../atoms/IconButtonFloatingBadge';
import Logo from '../../../assets/icons/svg/logo.svg';

type Props = {}

const Navbar = (props: Props) => {
    return (
        <Styled.Navbar aria-label="reeco">
            <Container className='container'>
                <NavBrandImage width="65px" alt="logo" src={Logo} />
                <Styled.NavbarCollape>
                    <Navs>
                        <NavItem href='#'>Store</NavItem>
                        <NavItem href='#'>Orders</NavItem>
                        <NavItem href='#'>Analytics</NavItem>
                    </Navs>
                </Styled.NavbarCollape>
                <Styled.ProfileSection>
                    <IconButtonFloatingBadge iconName="shopping-cart" badgeLabel="12" />
                    <Styled.ProfileDropdown label='Hello James' />
                </Styled.ProfileSection>
            </Container>
        </Styled.Navbar >
    )
}

export default Navbar