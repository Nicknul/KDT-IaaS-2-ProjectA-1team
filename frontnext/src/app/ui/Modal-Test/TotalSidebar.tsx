'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ModalComponent from './ModalComponent';
import { AddSets } from './components/AddSets';
import TableData from './components/TableData';

const TotalSidebar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [tableData, setTableData] = useState<any[]>([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleTableClick = async (tableName: string) => {
    setSelectedTable(tableName);
    try {
      const response = await fetch('http://localhost:8080/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ table: tableName }),
      });
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  const handleSave = async (updatedData: any[], updatedHeaders: string[]) => {
    if (!selectedTable) return;

    try {
      const response = await fetch('http://localhost:8080/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          table: selectedTable,
          data: updatedData,
          headers: updatedHeaders,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="flex">
      {/* 사이드바 영역 */}
      <Sidebar onTableClick={handleTableClick} />

      {/* 메인 콘텐츠 영역 */}
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <TableData
          selectedTable={selectedTable}
          tableData={tableData}
          onSave={handleSave}
        />
      </div>

      {/* 테이블 생성 모달 */}
      <ModalComponent show={showModal} onClose={toggleModal}>
        <div className="text-center">
          <AddSets />
        </div>
      </ModalComponent>
    </div>
  );
};

export default TotalSidebar;
