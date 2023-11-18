import React from 'react'
import * as Styled from './Card.styled';

type Props = {
    children: any
}

const Card = (props: Props) => {
    const { children } = props;
    return (
        <Styled.Card>
            <Styled.CardBody>
                {children}
            </Styled.CardBody>
        </Styled.Card>
    )
}

export default Card