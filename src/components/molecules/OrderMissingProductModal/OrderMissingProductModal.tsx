import React from 'react'
import Modal from '../../atoms/Modal'
import IconButton from '../../atoms/IconButton'
import Button from '../../atoms/Button'
import * as Styled from './OrderMissingProductModal.styled';
import LinkButton from '../../atoms/LinkButton';

type Props = {
    isOpen?: boolean,
    handleSubmit: (ar: boolean) => void,
    toggleModal: any,
    productName?: string
}

const OrderMissingProductModal = (props: Props) => {
    const { isOpen, handleSubmit, productName, toggleModal } = props;

    return (
        <Modal isOpen={isOpen} centered size="sm" toggle={toggleModal}>
            <Styled.ModalHeader className='d-flex items-center justify-between'>
                <h3>Missing Product</h3>
                <IconButton color="secondary" iconName='close' ariaLabel="modal:close" handleClick={toggleModal} />
            </Styled.ModalHeader>
            <Styled.ModalContent>is `{productName?.slice(0, 40)} ...` urgent?</Styled.ModalContent>
            <Styled.ModalFooter className='d-flex items-center justify-end'>
                <LinkButton color="secondary" label="No" handleClick={() => handleSubmit(false)} />
                <LinkButton color="secondary" label="Yes" handleClick={() => handleSubmit(true)} />
            </Styled.ModalFooter>
        </Modal>
    )
}

export default OrderMissingProductModal