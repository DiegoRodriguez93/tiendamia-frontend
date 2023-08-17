import { useCallback, FC } from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { Orders } from "@/app/entities/orders";

import styles from './exportXLSButton.module.css'

type ExcelReportButtonType = {
  data: Orders[];
};

const ExcelReportButton: FC<ExcelReportButtonType> = ({
  data,
}: {
  data: Orders[];
}) => {
  const generateExcel = useCallback(async () => {
    const workbook = new ExcelJS.Workbook();

    data.forEach((order, index) => {
      const worksheet = workbook.addWorksheet(`Order ${index + 1}`);
      worksheet.columns = [
        { header: "ID", key: "id", width: 10 },
        { header: "Title", key: "title", width: 30 },
        { header: "Description", key: "description", width: 50 },
        { header: "URL", key: "url", width: 30 },
        { header: "Price", key: "price", width: 10 },
        { header: "Quantity", key: "quantity", width: 10 },
      ];

      worksheet.addRow({
        id: `Order ID: ${order.id}`,
        title: `Create Date: ${order.createDate}`,
        description: `Status: ${order.status}`,
        url: `Client: ${order.client}`,
        price: `Shipping Address: ${order.shippingAddress}`,
        quantity: `Shipping Promise: ${order.shippingPromise}`,
      });

      worksheet.addRow({});

      order.items.forEach((item) => {
        worksheet.addRow({
          id: item.id,
          title: item.title,
          description: item.description,
          url: item.url,
          price: item.price,
          quantity: item.quantity,
        });
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "orders.xlsx");
  }, [data]);

  return <button className={styles.exportButton} onClick={generateExcel}>Download Excel Report</button>;
};

export default ExcelReportButton;
