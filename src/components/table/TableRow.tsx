import { DataTableColumnType } from "./Table";

type TableRowProps<T> = {
  columns: DataTableColumnType<T>[];
  item: T;
};

const TableRow = <T extends Record<string, unknown>>(
  props: TableRowProps<T>
) => {
  const { columns, item } = props;

  return (
    <tr>
      {columns.map((col, index) => (
        <td key={index} className="p-5">
          {col.render(item)}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
