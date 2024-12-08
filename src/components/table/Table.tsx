import { ReactNode } from "react";
import TableRow from "./TableRow";

export type DataTableColumnType<T> = {
  title?: string;
  render?: (data: T) => ReactNode;
};

type TableProps<T> = {
  columns: DataTableColumnType<T>[];
  data: T[];
};

const Table = <T extends Record<string, unknown>>(props: TableProps<T>) => {
  const { columns, data } = props;
  return (
    <table className="table-auto">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>
              <p>
                {col.title && col.title}
                {!col.title && ""}
              </p>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data?.map((i, index) => (
          <TableRow columns={columns} item={i} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
