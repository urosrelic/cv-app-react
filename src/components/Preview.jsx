import { Work } from "./Work";
import { EducationPreview } from "./preview/EducationPreview";
import { GeneralPreview } from "./preview/GeneralPreview";
import { WorkPreview } from "./preview/WorkPreview";

export const Preview = ({ generalData, educationData, workData }) => {
  return (
    <div className='preview-container'>
      <h2>Preview</h2>
      <div className='cv-container'>
        <GeneralPreview data={generalData} />
        <EducationPreview educationData={educationData} />
        <WorkPreview workData={workData} />
      </div>
    </div>
  );
};
