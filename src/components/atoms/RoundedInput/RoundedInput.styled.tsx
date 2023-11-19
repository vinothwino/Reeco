import styled from 'styled-components';
import FontIcon from '../FontIcon';

const InputWrapper = styled.div`
 position: relative;
`;

const Input = styled.input`
    width:100%;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey2};
    padding: 0.8rem 1rem;
    border-radius: 1.25rem;
`;

const InputIcon = styled(FontIcon)`
  position:absolute;
  right:20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export { Input, InputIcon, InputWrapper }