import styled from 'styled-components';

export const NavItem = styled.li``;

export const NavLink = styled.a`
  font-size: 1rem;
  color: white;
  font-weight: 300;
  letter-spacing: 0.5px;
  opacity: 0.85;
  text-decoration: none;
  transition: opacity .2s ease;
  padding: 0.5rem 2rem;
  &:hover, &.active{
    opacity: 1;
  }
`;