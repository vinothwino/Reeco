/*
Approved – by himself
Missing – by himself
Missing Urgent – by himself
Price updated – if the user changed the price in the edit popup.
Quantity updated – if the user changed the quantity in the edit popup.
the above 2 – price + quantity can be used together, which means the status will “quantity and
price updated”
*/

type OrderStatusType = { [index: string]: number }

export const ORDER_STATUS: OrderStatusType = {
    DEFAULT: 0,
    APPROVED: 1,
    MISSING: 2,
    MISSING_URGENT: 3,
    PRICE_UPDATED: 4,
    QUANTITY_UPDATED: 5,
    PRICE_AND_QUANTITY_UPDATED: 6
}

type ChooseReasonType = { label: string, value: number }

export const CHOOSE_REASON_LIST: ChooseReasonType[] = [
    {
        label: 'Missing product',
        value: 0
    },
    {
        label: 'Quantity is not the same',
        value: 1
    },
    {
        label: 'Price is not the same',
        value: 2
    },
    {
        label: 'Other',
        value: 3
    }
]