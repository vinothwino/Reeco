import { styled } from 'styled-components';
import Dropdown from '../../atoms/Dropdown';

export const Navbar = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 1rem 0;

    & > .container{
        display: flex;
        flex-wrap: inherit;
        align-items: center;
        justify-content: space-between;
    }
    
    & > div.nav-item:not(:first-child){
        margin-left:1rem;
    }
`;

export const NavbarCollape = styled.div`
    flex-grow: 1;
    display:none;
    @media only screen and (min-width: 1024px){
        display:block
    }
`;

export const ProfileSection = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
`;

export const ProfileDropdown = styled(Dropdown)`
    margin-left: 2rem;
    @media screen and (min-width:768px){
        margin-left: 3.5rem
    }
`;