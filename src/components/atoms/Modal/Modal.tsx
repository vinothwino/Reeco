import React from 'react'
import * as Styled from './Modal.styled';

type Props = {
    className?: string,
    isOpen?: boolean
    centered?: boolean,
    size?: 'md' | 'sm',
    children: any,
    toggle: () => void
}

const Modal = (props: Props) => {
    const { isOpen, className, children, centered, size, toggle } = props;

    return (
        <Styled.Modal className={`${isOpen && 'show'}`}>
            <Styled.ModalDialog className={`${className} size-${size} ${centered && 'centered'}`}>
                {children}
            </Styled.ModalDialog>
            <Styled.ModalBackdrop onClick={toggle} />
        </Styled.Modal>
    )
}

Modal.defaultProps = {
    isOpen: false,
    size: 'md'
}

export default Modal