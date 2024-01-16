import { GeneralData } from "./data/GeneralData";

export const Preview = ({ generalData }) => {
  return (
    <div className='preview-container'>
      <GeneralData data={generalData} />
    </div>
  );
};
