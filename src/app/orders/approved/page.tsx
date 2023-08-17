"use client";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import { useMemo } from "react";
import { Orders } from "@/app/entities/orders";
import useGetTableData from "@/app/hooks/useGetTableData";
import { ORDERS_ENDPOINT } from "@/app/api/orders";
import TableExpandableRow from "@/app/components/TableExpandableRow";
import { columns, expandableColumns } from "@/app/constants/approved/tableColumns";
import ExcelReportButton from "@/app/components/ExportXLSButton";

const Approved = () => {
  const { data, error, isLoading } = useGetTableData(ORDERS_ENDPOINT.approved);

  const Expandable: React.FC<ExpanderComponentProps<Orders>> = ({ data }) => {
    return <TableExpandableRow data={data.items} columns={expandableColumns} />;
  };

  const actionsMemo = useMemo(
    () => (
      <ExcelReportButton data={data} />
    ),
    [data]
  );

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

export default Approved;
