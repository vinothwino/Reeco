import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchOrderDetails } from '../../services/orders.service';
import { ORDER_STATUS } from '../../constants/order.constants';

type Nullable<T> = T | null;

export type OrderedProductDataState = {
    productId: number,
    productImage: Nullable<any>,
    productName: string,
    brand: string,
    price: number,
    updatedPrice: number,
    currency: string,
    combo: number,
    comboMeasure: string,
    quantity: number,
    updatedQuantity: number,
    status: number,
    reasonForChange?: number,
    total: number,
    updatedTotal: number
}

export interface OrderState {
    supplierName: Nullable<string>,
    shippingDate: Nullable<string>,
    total: Nullable<number>,
    category: Nullable<string>,
    department: Nullable<string>,
    status: Nullable<string>,
    orderId: Nullable<number>,
    orderedProductList: OrderedProductDataState[]
}

export interface OrderDetailsState {
    isLoading: boolean,
    order: OrderState
}

const initialState: OrderDetailsState = {
    isLoading: true,
    order: {
        supplierName: null,
        shippingDate: null,
        total: null,
        category: null,
        department: null,
        status: null,
        orderId: null,
        orderedProductList: []
    }
}

interface ChangeProductStatus {
    productId?: number,
    status: number,
}

export interface EditProductDetail {
    productId: number,
    updatedPrice: number,
    updatedQuantity: number,
    updatedTotal: number,
    reasonForChange?: number
}


export const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState,
    reducers: {
        orderDetailsLoading: (state) => {
            state.isLoading = true
        },
        setOrderDetails: (state, action: PayloadAction<OrderState>) => {
            state.order = action.payload;
            state.isLoading = false
        },
        changeProductStatus: (state, action: PayloadAction<ChangeProductStatus>) => {
            const { orderedProductList } = state.order;
            const { productId, status: newStatus } = action.payload;
            let productIndex = orderedProductList.findIndex(product => product.productId === productId);
            if (productIndex > -1) {
                orderedProductList[productIndex].status = newStatus;
            }
        },
        editProductDetails: (state, action: PayloadAction<EditProductDetail>) => {
            const { orderedProductList } = state.order;
            const { productId, updatedPrice, updatedQuantity, updatedTotal, reasonForChange } = action.payload;
            let productIndex = orderedProductList.findIndex(product => product.productId === productId);
            if (productIndex > -1) {
                orderedProductList[productIndex].updatedPrice = updatedPrice;
                orderedProductList[productIndex].updatedQuantity = updatedQuantity;
                orderedProductList[productIndex].reasonForChange = reasonForChange;
                orderedProductList[productIndex].updatedTotal = updatedTotal;
                if (orderedProductList[productIndex].price !== updatedPrice && orderedProductList[productIndex].quantity !== updatedQuantity) {
                    orderedProductList[productIndex].status = ORDER_STATUS.PRICE_AND_QUANTITY_UPDATED
                } else {
                    orderedProductList[productIndex].status = orderedProductList[productIndex].price !== updatedPrice
                        ? ORDER_STATUS.PRICE_UPDATED
                        : ORDER_STATUS.QUANTITY_UPDATED
                }
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { orderDetailsLoading, setOrderDetails, changeProductStatus, editProductDetails } = orderDetailsSlice.actions;

const fetchOrderDetailsById: any = (userId: number) => async (dispatch: any) => {
    dispatch(orderDetailsLoading())
    const response: any = await fetchOrderDetails(userId)

    dispatch(setOrderDetails(response.data))
}


export { fetchOrderDetailsById }

export default orderDetailsSlice.reducer
