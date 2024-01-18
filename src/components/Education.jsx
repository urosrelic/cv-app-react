import { useState } from "react";

export const Education = ({ educationData, setEducationData }) => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    school: "",
    degree: "",
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

    setEducationData((currentData) => [...currentData, formData]);

    setFormData({
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleDelete = (id) => {
    setEducationData((currentData) =>
      currentData.filter((item) => item.id !== id)
    );
  };

  // console.log(educationData);

  return (
    <div className='education-container'>
      <h2>Education</h2>
      <div className='submitted-education-data'>
        {educationData.map((item) => (
          <div key={item.id} className='submitted-education-item'>
            <p>School: {item.school}</p>
            <div
              id='delete-education-item-btn'
              onClick={() => handleDelete(item.id)}
            >
              <i className='fa-solid fa-trash'></i>
            </div>
          </div>
        ))}
      </div>
      <form id='education-entry-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='school'>School</label>
          <input
            type='text'
            name='school'
            value={formData.school}
            onChange={(e) => handleInputChange("school", e)}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='degree'>Degree</label>
          <input
            type='text'
            name='degree'
            value={formData.degree}
            onChange={(e) => handleInputChange("degree", e)}
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
