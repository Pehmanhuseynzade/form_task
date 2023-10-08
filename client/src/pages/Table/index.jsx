import React, { useEffect, useState } from 'react';
import "./index.css"
import { Link } from 'react-router-dom';
import { getpost } from '../../api/httpsrequests';

function Table() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  // const [responseData, setResponseData] = useState(null);
  const parts = selectedOption.split('/');
  const ad = parts[0];
  const soyad = parts[1];
  const yas = parts[2];

  console.log(selectedOption);

  const parts2 = selectedOption2.split('/');
  const companyName = parts2[0];
  const companyCat = parts2[1];

  console.log(selectedOption2);
  const handleSubmit = async () => {
    try {
      const formData = {
        type: selectedType,
        companyname:companyName,
        companycategory:companyCat,
        name:ad,
        surname:soyad,
        age:yas
      };
      const formsucces = await getpost(formData);
      console.log(formData);
      if (formsucces) {
        setSelectedType({ ...selectedType, isPosted: true });
        setSelectedOption({ ...selectedOption, isPosted: true });
        setSelectedOption2({ ...selectedOption2, isPosted: true });
      }
    } catch (error) {
      console.error('Failed to make a form:', error);
    }
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const types = searchParams.get('types');
    const choose1 = searchParams.get('choose1');
    const choose2 = searchParams.get('choose2');

    setSelectedType(types || '');
    setSelectedOption(choose1 || '');
    setSelectedOption2(choose2 || '');
  }, []);

  let description;
  if (selectedType === 'type5') {
    description = 'Qeyd';
  } else {
    description = 'Tesvir';
  }

  return (
    <>
      <Link to='/'><button className='back'>Go Back</button></Link>
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
                    <td>{selectedType} {description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button type='submit' className='send' onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Table;
