import React from 'react'
import * as Styled from './Chips.styled';

type Props = {
    label: string,
    className?: string,
    active?: boolean,
    color?: 'success' | 'danger' | 'orange' | 'inverse',
    handleClick?: React.MouseEventHandler
}

const Chips = (props: Props) => {
    const { label, color, active, handleClick, className, } = props;

    return (
        <Styled.Chips onClick={handleClick} className={`${className} theme-${color} ${active ? 'active' : ''}`}>
            <Styled.Label>{label}</Styled.Label>
        </Styled.Chips>
    )
}

export default Chips