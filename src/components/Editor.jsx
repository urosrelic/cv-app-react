import { Education } from "./Education";
import { General } from "./General";
import { Skills } from "./Skills";
import { Work } from "./Work";

export const Editor = (props) => {
  const setGeneralData = props.setGeneralData;

  const educationData = props.educationData;
  const setEducationData = props.setEducationData;

  const workData = props.workData;
  const setWorkData = props.setWorkData;

  const skillsData = props.skillsData;
  const setSkillsData = props.setSkillsData;

  return (
    <div className='editor-container'>
      <General setGeneralData={setGeneralData} />
      <Education
        educationData={educationData}
        setEducationData={setEducationData}
      />
      <Work workData={workData} setWorkData={setWorkData} />
      <Skills skillsData={skillsData} setSkillsData={setSkillsData} />
    </div>
  );
};
