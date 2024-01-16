import { General } from "./General";

export const Editor = ({ setGeneralData }) => {
  return (
    <div className='editor-container'>
      <General setGeneralData={setGeneralData} />
    </div>
  );
};
