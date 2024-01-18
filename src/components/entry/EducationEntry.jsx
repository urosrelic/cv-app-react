export const EducationEntry = ({ entry }) => {
  return (
    <div className='education-preview-item'>
      <div className='education-preview-item-info'>
        <h3>{entry.degree}</h3>
        <p>{entry.school}</p>
        {entry.student === true ? (
          <p>{entry.startDate + " - Present"}</p>
        ) : (
          <p>{entry.startDate + " - " + entry.startDate}</p>
        )}
      </div>
    </div>
  );
};
