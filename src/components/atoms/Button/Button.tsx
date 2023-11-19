import React from 'react'
import * as Styled from './Button.styled';

type Props = {
    className?: string,
    outline?: boolean,
    label: string,
    link?: boolean,
    disabled?: boolean,
    handleClick?: React.MouseEventHandler
}

const Button = (props: Props) => {
    const { className, disabled, outline, label, handleClick } = props;
    const ButtonComponentKey = outline ? 'PrimaryOutlineButton' : 'PrimaryButton';
    const ButtonComponent = Styled[ButtonComponentKey];

    return (
        <ButtonComponent className={className} onClick={handleClick} disabled={disabled}>{label}</ButtonComponent>
    )
}

Button.defaultProps = {
    type: 'button'
}

export default Button