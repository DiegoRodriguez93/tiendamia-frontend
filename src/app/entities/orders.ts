import { Items } from "./items";

export type Orders = {
  client: string;
  createDate: string;
  id: number;
  items: Array<Items>;
  shippingAddress: string;
  shippingPromise: string;
  status: string;
};
