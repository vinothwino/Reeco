import { ORDER_STATUS } from "../../../constants/order.constants";

export const MAP_ORDER_STATUS_VS_ORDER_STATUS_CHIP_DATA: any = {
    [ORDER_STATUS.APPROVED]: { label: 'Approved', color: 'success' },
    [ORDER_STATUS.MISSING]: { label: 'Missing', color: 'orange' },
    [ORDER_STATUS.MISSING_URGENT]: { label: 'Missing - Urgent', color: 'danger' },
    [ORDER_STATUS.PRICE_UPDATED]: { label: 'Price Updated', color: 'success' },
    [ORDER_STATUS.QUANTITY_UPDATED]: { label: 'Quantity Updated', color: 'success' },
    [ORDER_STATUS.PRICE_AND_QUANTITY_UPDATED]: { label: 'Quantity and Price Updated', color: 'success' },
}