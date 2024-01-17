export const EducationEntry = ({ entry }) => {
  return (
    <div className='education-preview-item'>
      <div className='education-preview-item-info'>
        <h3>{entry.degree}</h3>
        <p>{entry.school}</p>
        <p>{"From: " + entry.startDate + " to: " + entry.endDate}</p>
      </div>
    </div>
  );
};
