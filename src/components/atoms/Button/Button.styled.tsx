import styled from 'styled-components';

const Button = styled.button`
  border-radius: 1.25rem;
  padding: .65rem 1.5rem;
  border:0;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer
`;

const PrimaryButton = styled(Button)`
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white}
`;

const PrimaryOutlineButton = styled(Button)`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary}
`;

export { PrimaryButton, PrimaryOutlineButton }