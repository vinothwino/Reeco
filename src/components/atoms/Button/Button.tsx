import React from 'react'
import * as Styled from './Button.styled';

type Props = {
    outline?: boolean,
    label: string,
    handleClick?: React.MouseEventHandler
}

const Button = (props: Props) => {
    const { outline, label, handleClick } = props;
    const ButtonComponentKey = outline ? 'PrimaryOutlineButton' : 'PrimaryButton';
    const ButtonComponent = Styled[ButtonComponentKey];

    return (
        <ButtonComponent onClick={handleClick}>{label}</ButtonComponent>
    )
}

export default Button