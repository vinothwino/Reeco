import React, { useEffect, useState } from 'react'
import _map from 'lodash/map'
import IconButton from '../../atoms/IconButton'
import Button from '../../atoms/Button'
import * as Styled from './EditProductModal.styled';
import { OrderedProductDataState } from '../../../store/features/orderDetails'
import LinkButton from '../../atoms/LinkButton';
import { CHOOSE_REASON_LIST } from '../../../constants/order.constants';
import Chips from '../../atoms/Chips';
import FontIcon from '../../atoms/FontIcon'

export type HandleEditSubmitArg = { updatedPrice: number, updatedQuantity: number, updatedTotal: number, reasonForChange?: number }

type Props = {
    isOpen?: boolean,
    handleSubmit: (arg: HandleEditSubmitArg) => void,
    toggleModal: any,
    product?: OrderedProductDataState
}

const EditProductModal = (props: Props) => {
    const { isOpen, handleSubmit, product, toggleModal } = props;
    const [price, setPrice] = useState<number>(0);
    const [reason, setReason] = useState<number>();
    const [quantity, setQuantity] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        if (isOpen && product) {
            setPrice(product.updatedPrice || product.price)
            setQuantity(product.updatedQuantity || product.quantity || 0);
            setTotal(product.updatedTotal || product.total);
            setReason(product.reasonForChange);
        }
    }, [isOpen, product])

    useEffect(() => {
        setTotal(Math.floor(price * quantity))
    }, [price, quantity])

    const handleEdit = () => {
        handleSubmit({
            updatedPrice: price,
            updatedQuantity: quantity,
            updatedTotal: total,
            reasonForChange: reason
        })
    }

    const renderChip = ({ label, value }: any) => <Chips label={label} active={value === reason} handleClick={() => setReason(value)} color='inverse' />

    const renderReasonChips = () => _map(CHOOSE_REASON_LIST, renderChip)

    const isValid = product?.quantity !== quantity || product?.price !== price

    return (
        <Styled.EditModal isOpen={isOpen} centered size="md" toggle={toggleModal}>
            <Styled.ModalHeader className='d-flex items-center justify-between'>
                <div>
                    <Styled.ModalHeading>{product?.productName}</Styled.ModalHeading>
                    <Styled.ModalSubHeading>{product?.brand}</Styled.ModalSubHeading>
                </div>
                <IconButton color="secondary" iconName='close' ariaLabel="modal:close" handleClick={toggleModal} />
            </Styled.ModalHeader>
            <Styled.ModalBody>
                <div className='d-flex'>
                    <img width="200" src={product?.productImage} alt="productimage" />
                    <Styled.Form>
                        <Styled.FormGroup>
                            <Styled.Formlabel>Price ($)</Styled.Formlabel>
                            <Styled.FormInput
                                type="number"
                                name="price"
                                value={price}
                                className='price-label'
                                onChange={(e: React.BaseSyntheticEvent) => setPrice(e.target.value)}
                            />
                        </Styled.FormGroup>
                        <Styled.FormGroup className='d-flex'>
                            <Styled.Formlabel>Quantity</Styled.Formlabel>
                            <div className='d-flex'>
                                <Styled.QuantityBtn disabled={quantity === 0} onClick={() => setQuantity(quantity => quantity - 1)}>
                                    <FontIcon iconName="minus" />
                                </Styled.QuantityBtn>
                                <Styled.FormInput
                                    type="number"
                                    name="quantity"
                                    value={quantity}
                                    disabled
                                    onChange={(e: React.BaseSyntheticEvent) => setQuantity(e.target.value)}
                                />
                                <Styled.QuantityBtn onClick={() => setQuantity(quantity => quantity + 1)}>
                                    <FontIcon iconName="plus" />
                                </Styled.QuantityBtn>
                            </div>
                        </Styled.FormGroup>
                        <div className='d-flex'>
                            <Styled.Formlabel>Total</Styled.Formlabel>
                            <span className='total-label'>${total}</span>
                        </div>
                    </Styled.Form>
                </div>
                <div className='d-flex flex-column'>
                    <h4>Choose reason (Optional)</h4>
                    <Styled.ChipGroup>
                        {renderReasonChips()}
                    </Styled.ChipGroup>
                </div>
            </Styled.ModalBody>
            <Styled.ModalFooterGroup className='d-flex justify-end'>
                <LinkButton color="primary" label="Cancel" handleClick={toggleModal} />
                <Button label="Submit" handleClick={handleEdit} disabled={!isValid} />
            </Styled.ModalFooterGroup>
        </Styled.EditModal >
    )
}

export default EditProductModal