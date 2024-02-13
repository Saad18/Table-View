const DropdownComponent = ({ checkBoxColumns, showColumns, handleToggleColumn }) => {
  return (
    <div className="dropdown">   
      <button className="dropbtn">Columns</button>
      <div className="dropdown-content">
        {checkBoxColumns.map((column) => (
          <div key={column.name}>
            <input
              type="checkbox"
              id={column.name}
              //optional chaining for checkbox field
              checked={  
                column.name === 'firstName' ? showColumns.showFirstName :
                column.name === 'lastName' ? showColumns.showLastName :
                column.name === 'email' ? showColumns.showEmail :
                column.name === 'address' ? showColumns.showAddress : false
              }
              onChange={() => handleToggleColumn(column.name)}
            />
            <label htmlFor={column.name}>{column.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DropdownComponent;
