export const GeneralPreview = ({ data }) => {
  return (
    <div className='general-preview-container'>
      <div className='basic-info'>
        <h1>{data.name + " " + data.lastName}</h1>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
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
    </div>
  );
};
