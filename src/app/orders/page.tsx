"use client";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import { useMemo } from "react";

import { Orders } from "../entities/orders";
import useGetTableData from "../hooks/useGetTableData";
import { ORDERS_ENDPOINT } from "../api/orders";

import TableExpandableRow from "../components/TableExpandableRow";
import { columns, expandableColumns } from "../constants/orders/tableColumns";
import ExcelReportButton from "../components/ExportXLSButton";

const Orders = () => {
  const { data, error, isLoading } = useGetTableData(ORDERS_ENDPOINT.orders);

  const Expandable: React.FC<ExpanderComponentProps<Orders>> = ({ data }) => {
    return <TableExpandableRow data={data.items} columns={expandableColumns} />;
  };

  const actionsMemo = useMemo(() => <ExcelReportButton data={data} />, [data]);

  if (isLoading) {
    return "...Loading";
  }

  if (error) {
    return "An error has occurred please try again later";
  }

  return (
    <DataTable
      columns={columns}
      data={data}
      responsive
      expandableRows
      expandableRowsComponent={Expandable}
      actions={actionsMemo}
    />
  );
};

export default Orders;
