import React, { useState, useEffect } from 'react';

interface TableDataProps {
  selectedTable: string | null;
  tableData: any[];
}

const TableData: React.FC<TableDataProps> = ({ selectedTable, tableData }) => {
  const [editableData, setEditableData] = useState<any[]>([]);

  useEffect(() => {
    setEditableData(tableData);
  }, [tableData]);

  const handleInputChange = (rowIndex: number, key: string, value: string) => {
    const updatedData = editableData.map((row, idx) => {
      if (idx === rowIndex) {
        return { ...row, [key]: value };
      }
      return row;
    });
    setEditableData(updatedData);
  };

  return (
    <div>
      {selectedTable && editableData.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">{selectedTable}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(editableData[0]).map((key) => (
                    <th
                      key={key}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <input
                        type="text"
                        value={key}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {editableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.entries(row).map(([key, value], colIndex) => (
                      <td
                        key={colIndex}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        <input
                          type="text"
                          value={value}
                          onChange={(e) =>
                            handleInputChange(rowIndex, key, e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableData;
