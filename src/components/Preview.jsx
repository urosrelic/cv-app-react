export const Preview = ({ generalData }) => {
  return (
    <div className='preview-container'>
      <h1>Preview</h1>
      <p>Name: {generalData.name}</p>
      <p>Last Name: {generalData.lastName}</p>
      <p>Title: {generalData.title}</p>
      <p>Description: {generalData.description}</p>
    </div>
  );
};
