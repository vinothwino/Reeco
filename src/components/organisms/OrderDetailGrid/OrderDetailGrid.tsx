import React from 'react'
import _map from 'lodash/map';
import Card from '../../atoms/Card'
import * as Styled from './OrderDetailGrid.styled';
import { useSelector } from 'react-redux';
import { OrderDetailsState } from '../../../store/features/orderDetails';

type Props = {}

interface RenderInfoGroup {
    label: string,
    value: string | number | null
}

const OrderDetailGrid = (props: Props) => {
    const order = useSelector((state: OrderDetailsState) => state.order);

    const renderInfoGroup = ({ label, value }: RenderInfoGroup) => (
        <>
            <Styled.InfoGroup>
                <Styled.InfoLabel>{label}</Styled.InfoLabel>
                <Styled.InfoValue>{value}</Styled.InfoValue>
            </Styled.InfoGroup>
        </>
    )

    const orderStatusList: RenderInfoGroup[] = [
        {
            label: 'Supplier',
            value: order.supplierName
        },
        {
            label: 'Shipping date',
            value: order.shippingDate
        },
        {
            label: 'Total',
            value: order.total
        },
        {
            label: 'Category',
            value: order.category
        },
        {
            label: 'Department',
            value: order.department
        },
        {
            label: 'Status',
            value: order.status
        }
    ]

    const renderOrderDetailsStatus = () => _map(orderStatusList, (data: RenderInfoGroup, index: number) => (
        <>
            {renderInfoGroup(data)}
            {index !== orderStatusList.length - 1 && (
                <Styled.InfoGroupSeperator />
            )}
        </>
    ));

    return (
        <Styled.InfoContainer>
            <Card>
                <Styled.InfoWrapper>
                    {renderOrderDetailsStatus()}
                </Styled.InfoWrapper>
            </Card>
        </Styled.InfoContainer>
    )
}

export default OrderDetailGrid