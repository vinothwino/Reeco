import React from 'react'
import * as Styled from './Card.styled';

type Props = {
    children: any,
    className?: string
}

const Card = (props: Props) => {
    const { children, className } = props;

    return (
        <Styled.Card className={className}>
            <Styled.CardBody>
                {children}
            </Styled.CardBody>
        </Styled.Card>
    )
}

export default Card