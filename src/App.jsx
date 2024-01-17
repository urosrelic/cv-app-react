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

  console.log(generalData);

  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Editor setGeneralData={setGeneralData} />
        <Preview generalData={generalData} />
      </div>
    </div>
  );
}

export default App;
