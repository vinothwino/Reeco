import React from 'react'
import * as Styled from './OrderDetails.styled';
import Navbar from '../../molecules/Navbar'
import OrderHeader from '../../organisms/OrderHeader'
import OrderDetailsMain from '../../organisms/OrderDetailsMain/OrderDetailsMain';

type Props = {}

const OrderDetails = (props: Props) => {

    return (
        <Styled.OrderDetailsWrapper>
            <Navbar />
            <OrderHeader />
            <OrderDetailsMain />
        </Styled.OrderDetailsWrapper>

    )
}

export default OrderDetails