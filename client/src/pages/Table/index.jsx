import React, { useEffect, useState } from 'react';
import "./index.css"
function Table() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    // Extract the 'types', 'choose1', and 'choose2' parameters from the query string
    const types = searchParams.get('types');
    const choose1 = searchParams.get('choose1');
    const choose2 = searchParams.get('choose2');

    // Set the extracted values into state variables
    setSelectedType(types || '');
    setSelectedOption(choose1 || '');
    setSelectedOption2(choose2 || '');
  }, []);

  return (
    <>
    <div className='main-tables'>
    <div className='table-1'>
    <h1>Merhele 1</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Choose1:</td>
            <td>{selectedOption}</td>
          </tr>
          <tr>
            <td>Choose2:</td>
            <td>{selectedOption2}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='table2'>
    <h1>Merhele 2</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Types:</td>
            <td>{selectedType}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Table;
