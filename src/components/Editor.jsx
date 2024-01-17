import { Education } from "./Education";
import { General } from "./General";

export const Editor = ({ setGeneralData, educationData, setEducationData }) => {
  return (
    <div className='editor-container'>
      <General setGeneralData={setGeneralData} />
      <Education
        educationData={educationData}
        setEducationData={setEducationData}
      />
    </div>
  );
};
