import { Items } from "@/app/entities/items";
import { Orders } from "@/app/entities/orders";
import { formatCurrency } from "@/app/utils/currency";
import { DATE_FORMAT } from "@/app/utils/date";
import { format } from "date-fns";
import { TableColumn } from "react-data-table-component";


export const columns: TableColumn<Orders>[] = [
  {
    name: "Name",
    selector: (row) => row.client,
  },
  {
    name: "Created Date",
    selector: (row) => row.createDate,
    format: ({ createDate }) => format(new Date(createDate), DATE_FORMAT),
  },
  {
    name: "Shipping Address",
    selector: (row) => row.shippingAddress,
  },
  {
    name: "Shipping Promise Date",
    selector: (row) => row.shippingPromise,
    format: ({ shippingPromise }) =>
      format(new Date(shippingPromise), DATE_FORMAT),
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
];

export const expandableColumns: TableColumn<Items>[] = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Description",
    selector: (row) => row.description,
  },
  {
    name: "Image Url",
    selector: (row) => row.url,
  },
  {
    name: "Price",
    selector: (row) => row.price,
    format: ({ price }) => formatCurrency(price),
  },
  {
    name: "Quantity",
    selector: (row) => row.quantity,
  },
];