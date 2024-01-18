import { WorkEntry } from "../entry/WorkEntry";

export const WorkPreview = ({ workData }) => {
  return (
    <div className='work-preview-container'>
      <h2>Work</h2>
      {workData.map((entry) => (
        <WorkEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
};
