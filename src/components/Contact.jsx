export const Contact = () => {
  return (
    <div className='contact-info-container'>
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
    </div>
  );
};
