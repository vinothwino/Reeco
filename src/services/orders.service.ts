import { OrderState } from "../store/features/orderDetails";

export const fetchOrderDetails = async (orderId: number) => {
    try {
        const orderDetailsResponse: { data: OrderState } = await fetch(`/api/v1/orders/${orderId}`).then(res => res.json());
        return orderDetailsResponse;
    } catch (err) {
        return {
            status: 500, error: err
        }
    }
}