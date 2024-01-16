import { BasicInfo } from "./components/BasicInfo";
import { ContactInfo } from "./components/ContactInfo";
import { Preview } from "./components/Preview";
import "./styles.css";

function App() {
  return (
    <div className='App'>
      <h1>Hello</h1>
      <div className='content'>
        <BasicInfo />
        <ContactInfo />
      </div>
      <Preview />
    </div>
  );
}

export default App;
