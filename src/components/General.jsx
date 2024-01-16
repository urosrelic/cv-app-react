import { useState } from "react";

export const General = ({ setGeneralData }) => {
  const [data, setData] = useState({});
  // const [data, setData] = useState(generalData || {});

  const handleInputChange = (fieldName, e) => {
    setData((currentData) => ({
      ...currentData,
      [fieldName]: e.target.value,
    }));

    setGeneralData(data);
  };

  return (
    <div className='general-info-container'>
      <div className='input-container'>
        <label>Name:</label>
        <input
          type='text'
          id='name-input'
          onChange={(e) => handleInputChange("name", e)}
        />
      </div>
      <div className='input-container'>
        <label>Last name:</label>
        <input
          type='text'
          id='last-name-input'
          onChange={(e) => handleInputChange("lastName", e)}
        />
      </div>
      <div className='input-container'>
        <label>Title:</label>
        <input
          type='text'
          id='title-input'
          onChange={(e) => handleInputChange("title", e)}
        />
      </div>
      <div className='input-container'>
        <label>Description:</label>
        <textarea
          id='description'
          onChange={(e) => handleInputChange("description", e)}
        />
      </div>
    </div>
  );
};
