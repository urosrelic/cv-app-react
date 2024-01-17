import { EducationPreview } from "./preview/EducationPreview";
import { GeneralPreview } from "./preview/GeneralPreview";

export const Preview = ({ generalData, educationData }) => {
  return (
    <div className='preview-container'>
      <GeneralPreview data={generalData} />
      <EducationPreview educationData={educationData} />
    </div>
  );
};
