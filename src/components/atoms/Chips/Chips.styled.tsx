import styled from 'styled-components';

export const Chips = styled.div`
    display: inline-flex;
    padding: 0.3rem 0.9rem;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};

    &.theme-danger{
        background-color: ${({ theme }) => theme.colors.danger};
    }
    &.theme-success{
        background-color: ${({ theme }) => theme.colors.success};

    }
    &.theme-orange{
        background-color: ${({ theme }) => theme.colors.orange};
    }

    &.theme-inverse{
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.secondary};
        border: 1px solid ${({ theme }) => theme.colors.lightGrey2};
        cursor:pointer;
    }

    &.theme-inverse.active{
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;

    }
`;

export const Label = styled.span`
    font-size: .85rem;
    font-weight: 400
`;