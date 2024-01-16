export const GeneralData = ({ data }) => {
  return (
    <div className='general-data-container'>
      <div className='basic-info'>
        <h2>{data.name + " " + data.lastName}</h2>
        <h3>{data.title}</h3>
      </div>
      <div className='contact-info'>
        <div className='contact-item'>
          <i className='fa-solid fa-envelope'></i>
          {data.email}
        </div>
        <div className='contact-item'>
          <i className='fa-solid fa-location-dot'></i>
          {data.location}
        </div>
        <div className='contact-item'>
          <i className='fa-solid fa-globe'></i>
          {data.website}
        </div>
        <div className='contact-item'>
          <i className='fa-solid fa-phone'></i>
          {data.phone}
        </div>
      </div>
      <div className='description'>
        <p>{data.description}</p>
      </div>
    </div>
  );
};
