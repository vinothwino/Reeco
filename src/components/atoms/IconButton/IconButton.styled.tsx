import styled from 'styled-components';

export const IconButton = styled.button`
  box-shadow: none;
  border:0;
  background-color: transparent;
  font-size:1.5rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 0
`;