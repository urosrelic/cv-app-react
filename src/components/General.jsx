export const General = ({ setGeneralData }) => {
  const handleInputChange = (fieldName, e) => {
    setGeneralData((currentData) => ({
      ...currentData,
      [fieldName]: e.target.value,
    }));
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
        <label>Email:</label>
        <input type='email' id='email-input' />
      </div>
      <div className='input-container'>
        <label>Location:</label>
        <input type='text' id='location-input' />
      </div>
      <div className='input-container'>
        <label>Website:</label>
        <input type='text' id='website-input' />
      </div>
      <div className='input-container'>
        <label>Phone:</label>
        <input type='text' id='phone-input' />
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
