export const Preview = ({ generalData }) => {
  return (
    <div className='preview-container'>
      <div className='general-info-container'>
        <h2>{generalData.name + " " + generalData.lastName}</h2>
        <h3>{generalData.title}</h3>
        <p>{generalData.description}</p>
      </div>
    </div>
  );
};
