import { EducationPreview } from "./preview/EducationPreview";
import { GeneralPreview } from "./preview/GeneralPreview";
import { SkillsPreview } from "./preview/SkillsPreview";
import { WorkPreview } from "./preview/WorkPreview";

export const Preview = ({
  generalData,
  educationData,
  workData,
  skillsData,
}) => {
  return (
    <div className='preview-container'>
      <div className='cv-container'>
        <GeneralPreview data={generalData} />
        <EducationPreview educationData={educationData} />
        <WorkPreview workData={workData} />
        <SkillsPreview skillsData={skillsData} />
      </div>
    </div>
  );
};
