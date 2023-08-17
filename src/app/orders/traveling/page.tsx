"use client";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import { ChangeEvent, useMemo, useState } from "react";
import { Orders } from "@/app/entities/orders";
import useGetTableData from "@/app/hooks/useGetTableData";
import { ORDERS_ENDPOINT } from "@/app/api/orders";
import TableExpandableRow from "@/app/components/TableExpandableRow";
import {
  columns,
  expandableColumns,
} from "@/app/constants/traveling/tableColumns";
import ExcelReportButton from "@/app/components/ExportXLSButton";
import { isEmpty } from "lodash";
import styles from "./traveling.module.css";

enum DateRange {
  from = "from",
  to = "to",
}

const Approved = () => {
  const [rangeDate, setRangeDate] = useState({
    [DateRange.from]: null,
    [DateRange.to]: null,
  });
  const hasDateRangeSelected = rangeDate.to !== null && rangeDate.from !== null;
  const { data, error, isLoading } = useGetTableData(
    hasDateRangeSelected
      ? ORDERS_ENDPOINT.traveling(String(rangeDate.from), String(rangeDate.to))
      : null
  );

  const Expandable: React.FC<ExpanderComponentProps<Orders>> = ({ data }) => {
    return <TableExpandableRow data={data.items} columns={expandableColumns} />;
  };

  const actionsMemo = useMemo(() => {
    if (isEmpty(data)) {
      return null;
    }
    return <ExcelReportButton data={data} />;
  }, [data]);

  if (isLoading) {
    return "...Loading";
  }

  if (error) {
    return "An error has occurred please try again later";
  }

  const handleSetDate = (e: ChangeEvent<HTMLInputElement>, key: DateRange) => {
    setRangeDate({ ...rangeDate, [key]: e.target.value });
  };

  return (
    <>
      <label htmlFor={DateRange.from}>From</label>
      <input
        type="date"
        name={DateRange.from}
        id={DateRange.from}
        value={rangeDate.from ?? ""}
        onChange={(e) => handleSetDate(e, DateRange.from)}
      />
      <label htmlFor={DateRange.to}>To</label>
      <input
        type="date"
        name={DateRange.to}
        id={DateRange.to}
        value={rangeDate.to ?? ""}
        onChange={(e) => handleSetDate(e, DateRange.to)}
      />
      {!hasDateRangeSelected ? (
        <h4 className={styles.requiredFields}>
          Please select a valid date range
        </h4>
      ) : (
        <DataTable
          columns={columns}
          data={data}
          responsive
          expandableRows
          expandableRowsComponent={Expandable}
          actions={actionsMemo}
        />
      )}
    </>
  );
};

export default Approved;
