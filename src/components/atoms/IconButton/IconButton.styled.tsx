import styled from 'styled-components';

export const IconButton = styled.button`
  box-shadow: none;
  border:0;
  background-color: transparent;
  font-size:1.5rem;
  color: inherit;
  cursor: pointer;
  padding: 0;
  &.color-primary{
    color: ${({ theme }) => theme.colors.primary};
  }
  &.color-secondary{
    color: ${({ theme }) => theme.colors.secondary};
  }
  &.color-white{
    color: ${({ theme }) => theme.colors.white};
  }
  &.color-success{
    color: ${({ theme }) => theme.colors.success};
  }
  &.color-danger{
    color: ${({ theme }) => theme.colors.danger};
  }
`;