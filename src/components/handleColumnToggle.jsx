//toggling function
const handleToggleColumn = (checkBoxColumns, showColumns) => {
  switch (checkBoxColumns) {
    case 'firstName':
      return {
        ...showColumns,
        showFirstName: !showColumns.showFirstName,
      };
    case 'lastName':
      return {
        ...showColumns,
        showLastName: !showColumns.showLastName,
      };
    case 'email':
      return {
        ...showColumns,
        showEmail: !showColumns.showEmail,
      };
    case 'address':
      return {
        ...showColumns,
        showAddress: !showColumns.showAddress,
      };
    default:
      return showColumns;
  }
};

export default handleToggleColumn;
