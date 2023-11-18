import styled from 'styled-components';
import Container from '../../atoms/Container/Container';
import BreadCrumbs from '../../atoms/BreadCrumbs';
import Button from '../../atoms/Button';

type CardProps = {
    children: any
}
const Card = styled.div<CardProps>`
    position: sticky;
    top:0;
    z-index:99;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: .2rem 0 1rem rgba(0,0,0,.2);
`;

const OrderContainer = styled(Container)`
    padding-top: 0.8125rem;
    padding-bottom: 0.8125rem;
`;

const OrderBreadCrumbs = styled(BreadCrumbs)`
    margin-bottom: 1rem
`;

const OrderHeading = styled.h2`
    color: ${({ theme }) => theme.colors.black}
`;


const OrderButtonGroup = styled.div`
    display:none;
    @media screen and (min-width:768px){
        display: block;
    } 
    & > button:not(:first-child) {
        margin-left: 1rem;
    }
`;


export { Card, OrderButtonGroup, OrderContainer, OrderHeading, OrderBreadCrumbs }