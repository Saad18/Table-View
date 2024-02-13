
const TableComponent = ({ data, showColumns }) => {
  return (
    <div className="table">
      <div className="table-header"> 
        {showColumns.showFirstName && <div className="table-cell">Firstname</div>}
        {showColumns.showLastName && <div className="table-cell">Lastname</div>}
        {showColumns.showEmail && <div className="table-cell">Email</div>}
        {showColumns.showAddress && <div className="table-cell">Address</div>}
      </div>
      {data.map((person, index) => (
        <div key={index} className="table-row">
          {showColumns.showFirstName && <div className="table-cell">{person.firstname}</div>}
          {showColumns.showLastName && <div className="table-cell">{person.lastname}</div>}
          {showColumns.showEmail && <div className="table-cell">{person.email}</div>}
          {showColumns.showAddress && <div className="table-cell">{person.address}</div>}
        </div>
      ))}
    </div>
  );
};

export default TableComponent;
