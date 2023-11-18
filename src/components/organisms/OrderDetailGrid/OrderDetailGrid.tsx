import React from 'react'
import _map from 'lodash/map';
import Card from '../../atoms/Card'
import { Container } from '../../atoms/Container/Container.styled'
import * as Styled from './OrderDetailGrid.styled';

type Props = {}

interface RenderInfoGroup {
    label: string,
    value: string
}

const ORDER_DETAILS = {
    supplierName: 'East coast fruits & vegetables',
    shippingDate: 'Thu, Feb 10',
    total: '$ 15,028.3',
    category: '-',
    department: '300-444-678',
    status: 'Awaiting your approval'
}

const OrderDetailGrid = (props: Props) => {
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
            value: ORDER_DETAILS.supplierName
        },
        {
            label: 'Shipping date',
            value: ORDER_DETAILS.shippingDate
        },
        {
            label: 'Total',
            value: ORDER_DETAILS.total
        },
        {
            label: 'Category',
            value: ORDER_DETAILS.category
        },
        {
            label: 'Department',
            value: ORDER_DETAILS.department
        },
        {
            label: 'Status',
            value: ORDER_DETAILS.status
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
        <Container>
            <Card>
                <Styled.InfoWrapper>
                    {renderOrderDetailsStatus()}
                </Styled.InfoWrapper>
            </Card>
        </Container>
    )
}

export default OrderDetailGrid