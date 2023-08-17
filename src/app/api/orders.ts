const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const ORDERS_ENDPOINT = {
  orders: `${BASE_URL}/orders`,
  approved: `${BASE_URL}/orders/report/approve`,
  traveling: (startDate: string, endDate: string) =>
    `${BASE_URL}/orders/report/traveling?startDate=${startDate}&endDate=${endDate}`,
};
