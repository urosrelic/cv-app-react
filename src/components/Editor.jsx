import { useState } from "react";
import { BasicInfo } from "./BasicInfo";
import { ContactInfo } from "./ContactInfo";

export const Editor = () => {
  return (
    <div className='editor-container'>
      <BasicInfo />
      <ContactInfo />
    </div>
  );
};
