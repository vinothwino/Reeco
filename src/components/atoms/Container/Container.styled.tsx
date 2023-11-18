import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
    margin: 0 auto;
    
    @media screen and (min-width:576px){
        max-width: 540px;
    }

    @media screen and (min-width:768px){
        max-width: 720px;
    }

    @media screen and (min-width:992px){
        max-width: 960px;
    }

    @media screen and (min-width:1200px){
        max-width: 1140px;
    }

    @media screen and (min-width:1400px){
        max-width: 1320px;
    }
`;