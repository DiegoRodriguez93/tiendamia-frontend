"use client";
import { FC } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import styles from "./tableExpandableRow.module.css";

type TableExpandableRowType = {
  data: Array<Record<string, any>>;
  columns: TableColumn<any>[];
};

const TableExpandableRow: FC<TableExpandableRowType> = ({ data, columns }) => {
  return (
    <div className={styles.tableContainer}>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TableExpandableRow;
