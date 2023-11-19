import React from 'react'
import * as Styled from './LinkButton.styled';

type Props = {
    className?: string,
    color?: 'primary' | 'secondary',
    label: string,
    handleClick?: React.MouseEventHandler
}

const LinkButton = (props: Props) => {
    const { className, label, color, handleClick } = props;

    return (
        <Styled.Button className={`${className} theme-${color}`} onClick={handleClick}>{label}</Styled.Button>
    )
}

export default LinkButton