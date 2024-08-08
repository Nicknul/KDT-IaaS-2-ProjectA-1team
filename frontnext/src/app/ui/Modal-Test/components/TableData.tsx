import React, { useState, useEffect } from 'react';

interface TableDataProps {
  selectedTable: string | null;
  tableData: any[];
  onSave: (updatedData: any[], updatedHeaders: string[]) => void;
}

const TableData: React.FC<TableDataProps> = ({
  selectedTable,
  tableData,
  onSave,
}) => {
  const [editableData, setEditableData] = useState<any[]>([]);
  const [editableHeaders, setEditableHeaders] = useState<string[]>([]);
  const [headerWarnings, setHeaderWarnings] = useState<boolean[]>([]);

  useEffect(() => {
    setEditableData(tableData);
    if (tableData.length > 0) {
      setEditableHeaders(Object.keys(tableData[0]));
      setHeaderWarnings(
        new Array(Object.keys(tableData[0]).length).fill(false),
      );
    }
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

  const handleHeaderChange = (index: number, value: string) => {
    const updatedHeaders = [...editableHeaders];
    const updatedWarnings = [...headerWarnings];

    // Check for duplicate headers
    if (updatedHeaders.includes(value) && updatedHeaders[index] !== value) {
      updatedWarnings[index] = true;
    } else {
      updatedWarnings[index] = false;
      updatedHeaders[index] = value;
    }

    setEditableHeaders(updatedHeaders);
    setHeaderWarnings(updatedWarnings);
  };

  const handleSave = () => {
    // Check for any existing warnings before saving
    if (headerWarnings.some((warning) => warning)) {
      alert('중복된 열 제목이 있습니다. 수정 후 저장해 주세요.');
      return;
    }
    onSave(editableData, editableHeaders);
  };

  return (
    <div>
      {selectedTable && editableData.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">{selectedTable}</h2>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {editableHeaders.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <input
                        type="text"
                        value={header}
                        onChange={(e) =>
                          handleHeaderChange(index, e.target.value)
                        }
                        className={`w-full px-3 py-2 border ${headerWarnings[index] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      />
                      {headerWarnings[index] && (
                        <p className="text-red-500 text-xs mt-1">
                          중복된 열 제목입니다.
                        </p>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {editableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {editableHeaders.map((header, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        <input
                          type="text"
                          value={row[header] || ''}
                          onChange={(e) =>
                            handleInputChange(rowIndex, header, e.target.value)
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
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            저장
          </button>
        </div>
      )}
    </div>
  );
};

export default TableData;
