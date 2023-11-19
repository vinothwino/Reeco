import React from 'react'
import * as Styled from './OrderDetailsMain.styled'
import OrderDetailGrid from '../OrderDetailGrid'
import OrderProductList from '../OrderProductList'

type Props = {}

const OrderDetailsMain = (props: Props) => {

    return (
        <Styled.OrderDetailsWrapper>
            <OrderDetailGrid />
            <OrderProductList />
        </Styled.OrderDetailsWrapper>
    )
}

export default OrderDetailsMain