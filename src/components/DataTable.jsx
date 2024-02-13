import { useState } from 'react';
import '../index.css'
import { checkBoxColumns } from '../Data/data';
import { data } from '../Data/data';
import DropdownComponent from './DropdownComponent.';
import TableComponent from './TableComponent';
import handleColumnToggle from './handleColumnToggle';

const DataTable = () => {

  const [showColumns, setShowColumns] = useState({
    showFirstName: true,
    showLastName: true,
    showEmail: true,
    showAddress: true,
  });

  const handleToggleColumn = (checkBoxColumn) =>{ //toggling with the  checkBoxColumn array
      setShowColumns(handleColumnToggle(checkBoxColumn, showColumns, setShowColumns));
  }

  return (
    <>
      <div className="container">
        <h2>Basic Table</h2>
        {/* checkbox button inside dropdown menu */}
        <DropdownComponent
          checkBoxColumns={checkBoxColumns}
          showColumns={showColumns}
          handleToggleColumn={handleToggleColumn}
        />
        <TableComponent data={data} showColumns={showColumns} />
      </div>
    </>
  );
};

export default DataTable;