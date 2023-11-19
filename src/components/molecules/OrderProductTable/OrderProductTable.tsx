import React from 'react'
import IconButton from '../../atoms/IconButton'
import Button from '../../atoms/Button'
import { OrderedProductDataState } from '../../../store/features/orderDetails'
import * as Styled from './OrderProductTable.styled';
import Chips from '../../atoms/Chips';
import { ORDER_STATUS } from '../../../constants/order.constants';
import { MAP_ORDER_STATUS_VS_ORDER_STATUS_CHIP_DATA } from './OrderProductTable.constants';

type Props = {
    list: OrderedProductDataState[],
    handleApproveProduct: (productId: number) => void,
    handleMissingProduct: (productId: number) => void,
    handleEditProduct: (productId: number) => void,
}

const OrderProductTable = (props: Props) => {
    const { list, handleApproveProduct, handleMissingProduct, handleEditProduct } = props

    const getOrderPrice = (order: OrderedProductDataState) => {
        if (order.updatedPrice !== null && order.updatedPrice !== order.price) {
            return (
                <div className='d-flex flex-column'>
                    <span>{`${order.currency}${order.updatedPrice} / ${order.combo} * ${order.comboMeasure}`}</span>
                    <del className='text-lightGrey'>{`${order.currency}${order.price}`}</del>
                </div>
            )
        }

        return (
            <span>{`${order.currency}${order.price} / ${order.combo} * ${order.comboMeasure}`}</span>
        )
    }

    const getOrderQuantity = (order: OrderedProductDataState) => {
        if (order.updatedQuantity !== null && order.updatedQuantity !== order.quantity) {
            return (
                <div className='d-flex flex-column'>
                    <span className='text-lightGrey'><strong className='text-black'>{order.updatedQuantity}</strong>{` X ${order.combo} * ${order.comboMeasure}`}</span>
                    <del className='text-lightGrey'>{`${order.quantity}`}</del>
                </div>
            )
        }

        return (
            <span className='text-lightGrey'><strong className='text-black'>{order.quantity}</strong>{` / ${order.combo} * ${order.comboMeasure}`}</span>
        )
    }

    const getOrderTotal = (order: OrderedProductDataState) => {
        if (order.updatedTotal !== null && order.total !== order.updatedTotal) {
            return (
                <div className='d-flex flex-column'>
                    <span>{`${order.currency}${order.updatedTotal}`}</span>
                    <del className='text-lightGrey'>{`${order.currency}${order.total}`}</del>
                </div>
            )
        }
        return (
            <span>{`${order.currency}${order.total}`}</span>
        )
    }

    return (
        <Styled.TableContainer>
            <Styled.Table>
                <thead>
                    <tr>
                        <Styled.TableHeading></Styled.TableHeading>
                        <Styled.TableHeading>Product Name</Styled.TableHeading>
                        <Styled.TableHeading>Brand</Styled.TableHeading>
                        <Styled.TableHeading>Price</Styled.TableHeading>
                        <Styled.TableHeading>Quantity</Styled.TableHeading>
                        <Styled.TableHeading>Total</Styled.TableHeading>
                        <Styled.TableHeading>Status</Styled.TableHeading>
                        <Styled.TableHeading></Styled.TableHeading>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((order) => (
                            <tr key={order.productId}>
                                <Styled.TableData><img className="img-fluid" src={order.productImage} width="50" alt="product" /></Styled.TableData>
                                <Styled.TableData>{order.productName}</Styled.TableData>
                                <Styled.TableData>{order.brand}</Styled.TableData>
                                <Styled.TableData>{getOrderPrice(order)}</Styled.TableData>
                                <Styled.TableData>{getOrderQuantity(order)}</Styled.TableData>
                                <Styled.TableData>{getOrderTotal(order)}</Styled.TableData>
                                <Styled.TableData>
                                    {
                                        !!MAP_ORDER_STATUS_VS_ORDER_STATUS_CHIP_DATA[order.status] && (
                                            <Chips {...MAP_ORDER_STATUS_VS_ORDER_STATUS_CHIP_DATA[order.status]} />
                                        )
                                    }
                                </Styled.TableData>
                                <Styled.TableData>
                                    <Styled.ActionGroup className='d-flex items-center justify-center'>
                                        <IconButton
                                            iconName={order.status === ORDER_STATUS.APPROVED ? 'check-dark' : 'check'}
                                            color={order.status === ORDER_STATUS.APPROVED ? 'success' : 'secondary'}
                                            handleClick={() => handleApproveProduct(order.productId)}
                                        />
                                        <IconButton
                                            iconName={order.status === ORDER_STATUS.MISSING_URGENT || order.status === ORDER_STATUS.MISSING ? 'close-dark' : 'close'}
                                            color={order.status === ORDER_STATUS.MISSING_URGENT || order.status === ORDER_STATUS.MISSING ? 'danger' : 'secondary'}
                                            handleClick={() => handleMissingProduct(order.productId)}
                                        />
                                        <Button
                                            label="Edit"
                                            handleClick={() => handleEditProduct(order.productId)}
                                        />
                                    </Styled.ActionGroup>
                                </Styled.TableData>
                            </tr>
                        ))
                    }
                </tbody>
            </Styled.Table>
        </Styled.TableContainer>
    )
}

export default OrderProductTable