import { GeneralPreview } from "./preview/GeneralPreview";

export const Preview = ({ generalData }) => {
  return (
    <div className='preview-container'>
      <GeneralPreview data={generalData} />
    </div>
  );
};
