import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

export const Skills = ({ skillsData, setSkillsData }) => {
  const [skill, setSkill] = useState({
    id: crypto.randomUUID(),
    type: "",
  });

  const handleInputChange = (fieldName, e) => {
    setSkill((currentData) => ({
      ...currentData,
      [fieldName]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSkillsData((currentData) => [...currentData, skill]);

    setSkill({
      id: crypto.randomUUID(),
      type: "",
    });
  };

  const handleDelete = (id) => {
    setSkillsData((currentData) =>
      currentData.filter((skill) => skill.id !== id)
    );
  };

  return (
    <div className='skills-container'>
      <h2>Skills</h2>
      <div className='submitted-skils-data'>
        {skillsData.map((skill) => (
          <div key={skill.id} className='submitted-skill-item'>
            <p>Skill: {skill.type}</p>
            <div id='delete-btn' onClick={() => handleDelete(skill.id)}>
              <i className='fa-solid fa-trash'></i>
            </div>
          </div>
        ))}
      </div>
      <form id='skills-entry-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Enter a skill..'
            value={skill.type}
            onChange={(e) => handleInputChange("type", e)}
          />
          <button id='add-entry-btn' type='submit'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
