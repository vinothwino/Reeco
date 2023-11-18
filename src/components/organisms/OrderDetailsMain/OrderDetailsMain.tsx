import React from 'react'
import * as Styled from './OrderDetailsMain.styled'
import OrderDetailGrid from '../OrderDetailGrid'

type Props = {}

const OrderDetailsMain = (props: Props) => {

    return (
        <Styled.OrderDetailsWrapper>
            <OrderDetailGrid />
        </Styled.OrderDetailsWrapper>
    )
}

export default OrderDetailsMain