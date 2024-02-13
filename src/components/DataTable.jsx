import { useState } from 'react';
import '../index.css'
import { checkBoxColumns } from '../Data/data';
import { data } from '../Data/data';
const DataTable = () => {

  const [showFirstName, setShowFirstName] = useState(true);
  const [showLastName, setShowLastName] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showAddress, setShowAddress] = useState(true);

  const handleToggleColumn = (checkBoxColumns) => {
    switch (checkBoxColumns) {
      case 'firstName':
        setShowFirstName(!showFirstName);
        break;
      case 'lastName':
        setShowLastName(!showLastName);
        break;
      case 'email':
        setShowEmail(!showEmail);
        break;
      case 'address':
        setShowAddress(!showAddress);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="container">
        <h2>Basic Table</h2>
        {/* checkbox button inside dropdown menu */}
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
                    column.name === 'firstName' ? showFirstName :
                      column.name === 'lastName' ? showLastName :
                        column.name === 'email' ? showEmail :
                          column.name === 'address' ? showAddress : false
                  }
                  onChange={() => handleToggleColumn(column.name)}
                />
                <label htmlFor={column.name}>{column.label}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="table">
        <div className="table-header"> 
            {showFirstName && <div className="table-cell">Firstname</div>}
            {showLastName && <div className="table-cell">Lastname</div>}
            {showEmail && <div className="table-cell">Email</div>}
            {showAddress && <div className="table-cell">Address</div>}
          </div>
        {data.map((person, index) => (
          <div key={index} className="table-row">
            {showFirstName && <div className="table-cell">{person.firstname}</div>}
            {showLastName && <div className="table-cell">{person.lastname}</div>}
            {showEmail && <div className="table-cell">{person.email}</div>}
            {showAddress && <div className="table-cell">{person.address}</div>}
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default DataTable;