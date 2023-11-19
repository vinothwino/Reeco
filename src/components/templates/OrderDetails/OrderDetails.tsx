import React, { useEffect, useRef } from 'react'
import * as Styled from './OrderDetails.styled';
import Navbar from '../../molecules/Navbar'
import OrderHeader from '../../organisms/OrderHeader'
import OrderDetailsMain from '../../organisms/OrderDetailsMain/OrderDetailsMain';
import { fetchOrderDetailsById } from '../../../store/features/orderDetails';
import { useDispatch } from 'react-redux';

type Props = {}

const OrderDetails = (props: Props) => {
    const dispatch = useDispatch();
    const initialized = useRef(false)

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            dispatch(fetchOrderDetailsById(12))
        }
    }, [])
    return (
        <Styled.OrderDetailsWrapper>
            <Navbar />
            <OrderHeader />
            <OrderDetailsMain />
        </Styled.OrderDetailsWrapper>

    )
}

export default OrderDetails