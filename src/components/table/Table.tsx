import { ReactNode } from "react";
import TableRow from "./TableRow";

export type DataTableColumnType<T> = {
  title: string;
  render: (data: T) => ReactNode;
};

type TableProps<T> = {
  columns: DataTableColumnType<T>[];
  data: T[];
};

const Table = <T extends Record<string, unknown>>(props: TableProps<T>) => {
  const { columns, data } = props;
  return (
    <div className="relative overflow-x-auto w-full">
      <table className="table-auto w-full bg-container rounded-md shadow-md bd-grey divide-y divide-bg mt-2">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="p-5">
                <p className="font-heading text-sm text-grey font-normal text-left">
                  {col.title}
                </p>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-bg">
          {data.map((i, index) => (
            <TableRow columns={columns} item={i} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
