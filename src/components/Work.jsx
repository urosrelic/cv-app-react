import { useState } from "react";

export const Work = ({ workData, setWorkData }) => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    institutionName: "",
    position: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (fieldName, e) => {
    setFormData((currentData) => ({
      ...currentData,
      [fieldName]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setWorkData((currentData) => [...currentData, formData]);
  };

  const handleDelete = (id) => {
    setWorkData((currentData) => currentData.filter((item) => item.id !== id));
  };

  return (
    <div className='work-container'>
      <h2>Work</h2>
      <div className='submitted-work-data'>
        {workData.map((item) => (
          <div key={item.id} className='submitted-work-item'>
            <p>Institution: {item.institutionName}</p>
            <div id='delete-btn' onClick={() => handleDelete(item.id)}>
              <i className='fa-solid fa-trash'></i>
            </div>
          </div>
        ))}
      </div>
      <form id='work-entry-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='institutionName'>Institution name:</label>
          <input
            type='text'
            name='institutionName'
            value={formData.institutionName}
            onChange={(e) => handleInputChange("institutionName", e)}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='position'>Position: </label>
          <input
            type='text'
            name='position'
            value={formData.position}
            onChange={(e) => handleInputChange("position", e)}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='start-date'>Start date:</label>
          <input
            type='date'
            name='start-date'
            value={formData.startDate}
            onChange={(e) => handleInputChange("startDate", e)}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='end-date'>End date:</label>
          <input
            type='date'
            name='end-date'
            value={formData.endDate}
            onChange={(e) => handleInputChange("endDate", e)}
          />
        </div>
        <div className='input-container'>
          <button id='add-entry-btn' type='submit'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
