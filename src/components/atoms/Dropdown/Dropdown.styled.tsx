import styled from 'styled-components';
import FontIcon from '../FontIcon';

const Dropdown = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

`;

const Label = styled.label`
  margin-right: .5rem;
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
`;

const FontIconOverriden = styled(FontIcon)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export { Dropdown, Label, FontIconOverriden };