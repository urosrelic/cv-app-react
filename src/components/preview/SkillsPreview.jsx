import { SkillsEntry } from "../entry/SkillsEntry";

export const SkillsPreview = ({ skillsData }) => {
  return (
    <div className='skills-preview-container'>
      <h2>Skills</h2>
      <ul className='skills-list'>
        {skillsData.map((entry) => (
          <SkillsEntry key={entry.id} entry={entry} />
        ))}
      </ul>
    </div>
  );
};
