import { useState } from "react";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import "./styles.css";
import { Navbar } from "./components/Navbar";

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

  console.log(generalData);

  return (
    <div className='App'>
      <Navbar />
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
