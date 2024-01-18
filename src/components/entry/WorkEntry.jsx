export const WorkEntry = ({ entry }) => {
  return (
    <div className='work-preview-item'>
      <div className='work-preview-item-info'>
        <h3>{entry.institutionName}</h3>
        <p>{entry.position}</p>
        {entry.startDate ? (
          <p>{entry.startDate + " - " + entry.endDate}</p>
        ) : null}
      </div>
    </div>
  );
};
