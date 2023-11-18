import React from 'react'
import * as Styled from './OrderHeader.styled';
import Button from '../../atoms/Button';

type Props = {}

const OrderHeader = (props: Props) => {
    return (
        <Styled.Card>
            <Styled.OrderContainer>
                <Styled.OrderBreadCrumbs />
                <div className='d-flex items-center justify-between'>
                    <Styled.OrderHeading>Order 3245ABC</Styled.OrderHeading>
                    <Styled.OrderButtonGroup className='flex item-center'>
                        <Button label="Back" outline />
                        <Button label="Approve Order" />
                    </Styled.OrderButtonGroup>
                </div>
            </Styled.OrderContainer>
        </Styled.Card>
    )
}


export default OrderHeader