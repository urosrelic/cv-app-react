import { General } from "./General";
import { Contact } from "./Contact";

export const Editor = ({ setGeneralData }) => {
  return (
    <div className='editor-container'>
      <General setGeneralData={setGeneralData} />
      <Contact />
    </div>
  );
};
