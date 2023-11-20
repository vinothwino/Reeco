import React, { useCallback, useState, useMemo } from 'react'
import Container from '../../atoms/Container/Container'
import * as Styled from './OrderProductList.styled';
import Button from '../../atoms/Button';
import IconButton from '../../atoms/IconButton';
import OrderProductTable from '../../molecules/OrderProductTable';
import OrderMissingProductModal from '../../molecules/OrderMissingProductModal';
import { useDispatch, useSelector } from 'react-redux';
import { OrderDetailsState, changeProductStatus, editProductDetails } from '../../../store/features/orderDetails';
import { ORDER_STATUS } from '../../../constants/order.constants';
import { Dispatch } from '@reduxjs/toolkit';
import EditProductModal from '../../molecules/EditProductModal';
import { HandleEditSubmitArg } from '../../molecules/EditProductModal/EditProductModal';

type Props = {}

const OrderProductList = (props: Props) => {
    const [selectedProductId, setSelectedProductId] = useState<number>();
    const dispatch: Dispatch = useDispatch()
    const [isOpenMissingProductModal, setIsOpenMissingProductModal] = useState<boolean>(false);
    const [isOpenEditProductModal, setIsOpenEditProductModal] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    const order = useSelector((state: OrderDetailsState) => state.order);
    const { orderedProductList } = order;

    const handleMissinProductModalClose = useCallback(() => setIsOpenMissingProductModal(false), [])

    const handleEditProductModalClose = useCallback(() => setIsOpenEditProductModal(false), [])

    const handleApproveProduct = useCallback((productId: number) => {
        dispatch(changeProductStatus({ productId, status: ORDER_STATUS.APPROVED }))
    }, [dispatch])

    const handleEditProduct = useCallback((productId: number) => {
        setSelectedProductId(productId);
        setIsOpenEditProductModal(true)
    }, [])

    const handleMissingProduct = useCallback((productId: number) => {
        setSelectedProductId(productId);
        setIsOpenMissingProductModal(true)
    }, [])

    const selectedProduct = useMemo(
        () => orderedProductList.find(product => product.productId === selectedProductId),
        [selectedProductId, orderedProductList]
    );

    const handleMissingProductConfirm = useCallback((isUrgent: boolean) => {
        setIsOpenMissingProductModal(false);
        dispatch(changeProductStatus({ productId: selectedProductId, status: isUrgent ? ORDER_STATUS.MISSING_URGENT : ORDER_STATUS.MISSING }))
    }, [selectedProductId, dispatch])

    const handleEditProductConfirm = useCallback((payload: HandleEditSubmitArg) => {
        setIsOpenEditProductModal(false);
        if (selectedProductId) {
            dispatch(editProductDetails({ productId: selectedProductId, ...payload }))
        }
    }, [dispatch, selectedProductId])

    return (
        <Container>
            <Styled.OrderCard>
                <Styled.OrderFilterWrapper className='w-50 d-flex items-center justify-between'>
                    <Styled.OrderSearchInput
                        type="text"
                        name="search"
                        value={search}
                        placeholder='Search...'
                        iconProps={{ iconName: 'search' }}
                        handleChange={(e: React.BaseSyntheticEvent) => setSearch(e.target.value)}
                    />
                    <Styled.OrderFilterButtonGroup>
                        <Button className="add-item" label="Add item" />
                        <IconButton iconName='printer' />
                    </Styled.OrderFilterButtonGroup>
                </Styled.OrderFilterWrapper>
                <OrderProductTable
                    list={orderedProductList}
                    handleApproveProduct={handleApproveProduct}
                    handleEditProduct={handleEditProduct}
                    handleMissingProduct={handleMissingProduct}
                />
                <OrderMissingProductModal
                    productName={selectedProduct?.productName}
                    isOpen={isOpenMissingProductModal}
                    toggleModal={handleMissinProductModalClose}
                    handleSubmit={handleMissingProductConfirm}
                />
                <EditProductModal
                    isOpen={isOpenEditProductModal}
                    product={selectedProduct}
                    toggleModal={handleEditProductModalClose}
                    handleSubmit={handleEditProductConfirm}
                />
            </Styled.OrderCard>
        </Container>
    )
}

export default OrderProductList