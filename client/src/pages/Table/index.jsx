import React, { useEffect, useState } from 'react';

function Table() {
  const [params, setParams] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramsArray = [];

    searchParams.forEach((value, name) => {
      paramsArray.push(
        <div key={name}>
          {name}: {value}
        </div>
      );
    });

    setParams(paramsArray);
  }, []);

  return (
    <div>
      {params}
    </div>
  );
}

export default Table;
