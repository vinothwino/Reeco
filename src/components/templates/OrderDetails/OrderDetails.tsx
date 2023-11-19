import React, { useEffect, useRef } from 'react'
import * as Styled from './OrderDetails.styled';
import Navbar from '../../molecules/Navbar'
import OrderHeader from '../../organisms/OrderHeader'
import OrderDetailsMain from '../../organisms/OrderDetailsMain/OrderDetailsMain';
import { OrderDetailsState, fetchOrderDetailsById } from '../../../store/features/orderDetails';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../atoms/Container/Container.styled';

type Props = {}

const OrderDetails = (props: Props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: OrderDetailsState) => state.isLoading)
    const initialized = useRef(false)

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            dispatch(fetchOrderDetailsById(12))
        }
    }, [dispatch])

    return (
        <Styled.OrderDetailsWrapper>
            <Navbar />
            {
                isLoading ? <Container>Loading...</Container> : (
                    <>
                        <OrderHeader />
                        <OrderDetailsMain />
                    </>
                )
            }
        </Styled.OrderDetailsWrapper>

    )
}

export default OrderDetails