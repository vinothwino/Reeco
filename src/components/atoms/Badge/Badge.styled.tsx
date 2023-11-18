import styled from 'styled-components';

export const Badge = styled.div`
    display: inline-flex;
    padding: 0.6rem;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    color: white;
`;

export const Label = styled.span`
    font-size: 8px;
    color: ${({ theme }) => theme.colors.white};
`;