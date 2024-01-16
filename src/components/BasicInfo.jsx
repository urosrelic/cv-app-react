export const BasicInfo = () => {
  return (
    <div className='basic-info-container'>
      <div className='input-container'>
        <label>Name:</label>
        <input type='text' id='name-input' />
      </div>
      <div className='input-container'>
        <label>Last name:</label>
        <input type='text' id='last-name-input' />
      </div>
      <div className='input-container'>
        <label>Title:</label>
        <input type='text' id='title-input' />
      </div>
      <div className='input-container'>
        <label>Description:</label>
        <textarea id='description' />
      </div>
    </div>
  );
};
