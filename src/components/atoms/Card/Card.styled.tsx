import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid gainsboro;
    border-radius: 0.625rem;
    background-color: ${({ theme }) => theme.colors.white}
`;

const CardBody = styled.div`
    padding: 1rem;
`;

export { Card, CardBody }