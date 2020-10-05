import React from "react";

import ExperienceHolder from "../ExperienceHolder/ExperienceHolder";
import ExperienceData from "./Data/ExperienceData";

let Education = () => {
  let ExperienceList = ExperienceData.map((workExperience) => {
    return (
      <ExperienceHolder
        title={workExperience.title}
        date={workExperience.date}
        description={workExperience.description}
        subdescription={workExperience.subdescription}
      />
    );
  });

  return (
    <div style={{ backgroundColor: "#BFC0C0" }}>
      <div className="container pt-3">
        <div className="row">
          <h3 className="pl-3 pr-3 pb-2">
            <u>Work Experience</u>
          </h3>
        </div>
        <div className="row pl-3 pr-3">{ExperienceList}</div>
      </div>
    </div>
  );
};

export default Education;
