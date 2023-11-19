import styled from 'styled-components';
import Modal from '../../atoms/Modal';

const EditModal = styled(Modal)`
  border-radius: 15px;
  padding: 2.5rem 1.5rem;
`;

const ModalHeader = styled.div`
  margin-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ModalHeading = styled.h3`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 600px;
  margin-bottom: .5rem;
`;

const ModalSubHeading = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
`;

const FormInput = styled.input`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
  max-width: 100px;
  margin: 0 .5rem;
  padding: .5rem;
  outline:0;
  box-shadow:none;
  border:1px solid ${({ theme }) => theme.colors.lightGrey2};
  border-radius: 10px;
  text-align: center;
`;

const Form = styled.div`
  margin-left: 2rem;
  .price-label{
    margin-left: 2.1rem;
  }
  .total-label{
    margin-left: 4.1rem;
    color: ${({ theme }) => theme.colors.secondary}
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items:center;
`;

const Formlabel = styled.label`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
  font-size: 1rem;
  margin-right: 3rem;
`;

const QuantityBtn = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.lightGreen};
    font-weight: 400;
    border:0;
    border-radius: 50%;
    font-size; 1rem;
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    //TODO: Need to remove
    &:first-child> i{
        height: 20px
    }
    &:disabled{
        opacity: .5;
        pointer-events: none;
    }
  `;

const ModalBody = styled.div`

`;

const ModalFooterGroup = styled.div`
  gap: 1rem;
  margin-top: 2rem;
`;

const ChipGroup = styled.h4`
    display: flex;  
    gap: 1rem;
    margin-top: .85rem;
`;

export { EditModal, Form, ChipGroup, ModalBody, Formlabel, FormGroup, FormInput, ModalHeader, QuantityBtn, ModalFooterGroup, ModalSubHeading, ModalHeading }