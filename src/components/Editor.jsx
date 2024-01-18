import { Education } from "./Education";
import { General } from "./General";
import { Work } from "./Work";

export const Editor = (props) => {
  const setGeneralData = props.setGeneralData;

  const educationData = props.educationData;
  const setEducationData = props.setEducationData;

  const workData = props.workData;
  const setWorkData = props.setWorkData;

  return (
    <div className='editor-container'>
      <General setGeneralData={setGeneralData} />
      <Education
        educationData={educationData}
        setEducationData={setEducationData}
      />
      <Work workData={workData} setWorkData={setWorkData} />
    </div>
  );
};
