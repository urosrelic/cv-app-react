import { useState } from "react";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
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

  console.log(generalData);

  return (
    <div className='App'>
      <h1>Hello</h1>
      <Editor setGeneralData={setGeneralData} />
      <Preview generalData={generalData} />
    </div>
  );
}

export default App;
