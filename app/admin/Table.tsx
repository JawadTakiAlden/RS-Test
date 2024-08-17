import React from "react";

export type Column<T> = {
  header: string;
  accessor?: keyof T;
  accessorFn?: (item: T) => any;
  cell?: (item: T) => React.ReactNode;
};

export type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  isLoading: boolean;
};

const Table = <T,>({ data, columns, isLoading }: TableProps<T>) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full">
        <p className="text-mid-grey">جاري التحميل ....</p>
      </div>
    );
  }
  return (
    <table className="w-full table-fixed  border-collapse">
      <thead className="text-[#71778E] font-normal text-[14px]">
        <tr>
          {columns.map((col, i) => (
            <th key={i} scope="col" className="text-start">
              <div className="w-full h-full py-6">{col.header}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataRow, i) => (
          <tr key={i} className="">
            {columns.map((col, j) => (
                
              <td
                key={j}
                scope="row"
                className="border-y border-solid border-soft-grey"
              >
                <div className="w-full h-full flex items-center max-h-[68px] min-h-[68px] py-6">
                  {
                    col.cell
                      ? col.cell(dataRow)
                      : col.accessorFn
                      ? col.accessorFn(dataRow)
                      : (dataRow[col.accessor!] as React.ReactNode) // Use type assertion here
                  }
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const areEqual = <T,>(prevProps: TableProps<T>, nextProps: TableProps<T>) => {
  return (
    prevProps.data === nextProps.data &&
    prevProps.columns === nextProps.columns &&
    prevProps.isLoading === nextProps.isLoading
  );
};

export default React.memo(Table, areEqual);
