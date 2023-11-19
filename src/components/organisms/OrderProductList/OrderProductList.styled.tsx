import styled from 'styled-components';
import Card from '../../atoms/Card';
import RoundedInput from '../../atoms/RoundedInput';

const OrderCard = styled(Card)`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const OrderSearchInput = styled(RoundedInput)`
  width:35%;
`;

const OrderFilterWrapper = styled.div`
  margin-bottom:1rem
`;

const OrderFilterButtonGroup = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  & > .add-item:first-child {
    margin-right: 2rem
  }
`;



export { OrderCard, OrderFilterButtonGroup, OrderSearchInput, OrderFilterWrapper }