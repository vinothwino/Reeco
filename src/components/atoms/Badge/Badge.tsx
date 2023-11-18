import React from 'react'
import * as Styled from './Badge.styled';

type Props = {
    label: string,
    className?: string
}

const Badge = (props: Props) => {
    const { label, className } = props;

    return (
        <Styled.Badge className={className}>
            <Styled.Label>{label}</Styled.Label>
        </Styled.Badge>
    )
}

export default Badge