import React, { useEffect, useState } from 'react';
import "./index.css"
import { Link } from 'react-router-dom';

function Table() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [responseData, setResponseData] = useState(null);

  const postDataToServer = async () => {
    try {
      const response = await fetch('http://localhost:9494/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedType,
          selectedOption,
          selectedOption2,
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        setResponseData(responseData); // Sunucu yanıtını saklayın
        console.log('Veri başarıyla post edildi. Sunucu yanıtı:', responseData);
      } else {
        console.error('Veriler post edilirken bir hata oluştu.');
      }
    } catch (error) {
      console.error('Post işlemi sırasında bir hata oluştu: ', error);
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
          <button type='submit' className='send' onClick={postDataToServer}>
            Send
          </button>
        </div>
      </div>
      {responseData && (
        <div className="response-data">
          <h2>Sunucu Yanıtı</h2>
          {/* İstenilen verileri burada görüntüleyebilirsiniz */}
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default Table;
