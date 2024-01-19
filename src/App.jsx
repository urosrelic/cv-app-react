import { useState } from "react";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { Navbar } from "./components/Navbar";
import exampleData from "./constants/exampleData";
import "./styles.css";

function App() {
  const [generalData, setGeneralData] = useState({
    name: "",
    lastName: "",
    title: "",
    email: "",
    location: "",
    website: "",
    phone: "",
    description: "",
  });

  const [educationData, setEducationData] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  const loadExampleData = () => {
    setGeneralData(exampleData.generalData);
    setEducationData(exampleData.educationData);
    setWorkData(exampleData.workData);
    setSkillsData(exampleData.skillsData);
  };

  return (
    <div className='App'>
      <Navbar loadExampleData={loadExampleData} />
      <div className='content'>
        <Editor
          setGeneralData={setGeneralData}
          educationData={educationData}
          setEducationData={setEducationData}
          workData={workData}
          setWorkData={setWorkData}
          skillsData={skillsData}
          setSkillsData={setSkillsData}
        />
        <Preview
          generalData={generalData}
          educationData={educationData}
          workData={workData}
          skillsData={skillsData}
        />
      </div>
    </div>
  );
}

export default App;
