import React from 'react'
import * as Styled from './Container.styled';

type Props = {
    className?: string,
    children: any
}

const Container = (props: Props) => {
    const { className, children } = props;
    return (
        <Styled.Container className={className}>
            {children}
        </Styled.Container>
    )
}

export default Container