export const SkillsEntry = ({ entry }) => {
  return (
    <div className='skills-preview-item'>
      <div className='skills-preview-item-info'>
        <li>{entry.type}</li>
      </div>
    </div>
  );
};
