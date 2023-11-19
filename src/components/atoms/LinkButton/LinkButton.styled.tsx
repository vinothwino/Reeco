import styled from 'styled-components';

const Button = styled.button`
  padding: .65rem 1rem;
  border:0;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  font-weight: 600;
  &.theme-primary{
    color: ${({ theme }) => theme.colors.primary};
  }
  &.theme-secondary{
    color: ${({ theme }) => theme.colors.secondary}
  }
`;

export { Button }