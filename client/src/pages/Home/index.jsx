import React, { useEffect, useState } from 'react';
import "./index.css";
import { getcategory,getinfo, gettypes } from '../../api/httpsrequests';


function Home() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isButton2Clicked, setIsButton2Clicked] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('');

  const [info, setInfo] = useState([]);
  useEffect(() => {
    getinfo().then((data) => {
      console.log(data)
      setInfo(data)
    })
  }, [])


  const [company, setCompany] = useState([]);
  useEffect(() => {
    getcategory().then((data) => {
      console.log(data)
      setCompany(data)
    })
  }, [])

  const handleButtonClick1 = () => {
    setIsButton1Clicked(true);
    setIsButton2Clicked(false);
    setSelectedOption('');
    setSelectedOption2('');
  };

  const handleButtonClick2 = () => {
    setIsButton1Clicked(false);
    setIsButton2Clicked(true);
    setSelectedOption('');
    setSelectedOption2('');
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    gettypes().then((data) => {
      console.log(data);
      setTypes(data);
    });
  }, []);

  return (
    <div className='form-elements'>
      <form action='/table' method='get' >
        <label htmlFor="types">Merhele 1:</label>
        <select
          name="types"
          id="types"
          onChange={handleTypeChange}
          value={selectedType}
        >
          <option value="">Select a type</option>
          {types.map((item) => (
            <option key={item._id} value={item.type}>
              {item.type}
            </option>
          ))}
        </select>

        {selectedType && (
          <div>
            <button type='button' onClick={handleButtonClick1}>Button 1</button>
            <button type='button' onClick={handleButtonClick2}>Button 2</button>

            {isButton1Clicked && (
              <div>
                <select
                name='choose1'
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value={selectedOption}>Seçim edin</option>
                  {info.map(infos => (
                    <option key={infos.value} value={infos.value}>
                      {infos.name}/{infos.surname}/{infos.age}
                    </option>
                  ))}
                </select>
                
                <input
                  type="text"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
              </div>
            )}

            {isButton2Clicked && (
              <div>
                <select
                name='choose2'
                  value={selectedOption2}
                  onChange={(e) => setSelectedOption2(e.target.value)}
                >
                  <option value="">Seçim edin</option>
                  {company.map(companyitems => (
                    <option key={companyitems.value} value={companyitems.value}>
                      {companyitems.companyname}/{companyitems.companycategory}
                    </option>
                  ))}
                </select>
                
                <input
                  type="text"
                  value={selectedOption2}
                  onChange={(e) => setSelectedOption2(e.target.value)}
                />
              </div>
            )}
          </div>
        )}
        <button className='next' type='submit'>Next</button>
      </form>
    </div>
  );
}

export default Home;

