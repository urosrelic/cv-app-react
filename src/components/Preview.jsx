import { EducationPreview } from "./preview/EducationPreview";
import { GeneralPreview } from "./preview/GeneralPreview";

export const Preview = ({ generalData, educationData }) => {
  return (
    <div className='preview-container'>
      <h2>Preview</h2>
      <div className='cv-container'>
        <GeneralPreview data={generalData} />
        <EducationPreview educationData={educationData} />
      </div>
    </div>
  );
};
