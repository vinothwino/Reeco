import { http, HttpResponse } from 'msw'
import Apple from '../assets/images/apple-green.png';
import Avocoda from '../assets/images/avocado.jpg';
/*
    default: 0
    Approved – 1
    Missing – 2
    Missing Urgent – 3
    Price updated – 4
    Quantity updated – 5
    quantity and price updated - 6
*/

const PRODUCT_DETAIL_SAMPLE = {
    // productId?: 0,
    productName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error explicabo, iusto a voluptatem nostrum aut eius',
    // productImage?: Avocoda,
    brand: 'Hormel Brand',
    price: 60.67,
    updatedPrice: null,
    currency: '$',
    combo: 6,
    comboMeasure: '1LB',
    quantity: 1,
    updatedQuantity: null,
    status: 0,
    total: 60,
    updatedTotal: null
}

const getProductImage = (num: number) => num % 2 === 0 ? Apple : Avocoda;

const getProductList = () => Array
    .from({ length: 10 })
    .map(
        (data, index: number) => ({ productId: index + 1, productImage: getProductImage(index + 1), ...PRODUCT_DETAIL_SAMPLE })
    )

const ORDER_DETAILS = {
    supplierName: 'East coast fruits & vegetables',
    shippingDate: 'Thu, Feb 10',
    total: '$ 15,028.3',
    category: '-',
    department: '300-444-678',
    status: 'Awaiting your approval',
    orderId: '3245ABC',
    orderedProductList: getProductList()
}

export const handlers = [
    http.get('/api/v1/orders/*', async () => {
        await new Promise((res) => setTimeout(res, 3000));
        return HttpResponse.json({
            data: ORDER_DETAILS
        })
    }),
]