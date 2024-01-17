import { EducationEntry } from "../entry/EducationEntry";

export const EducationPreview = ({ educationData }) => {
  return (
    <div className='education-preview-container'>
      <h2>Education</h2>
      {educationData.map((entry) => (
        <EducationEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
};
