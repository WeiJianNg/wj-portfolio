import React from "react";

import ExperienceHolder from "../ExperienceHolder/ExperienceHolder";
import EducationData from "./Data/EducationData";

let Education = () => {
  let EducationList = EducationData.map((Education) => {
    return (
      <ExperienceHolder
        title={Education.title}
        date={Education.date}
        description={Education.description}
      />
    );
  });

  return (
    <div style={{ backgroundColor: "#BFC0C0" }}>
      <div className="container pt-3">
        <div className="row">
          <h3 className="pl-3 pr-3 pb-2">
            <u>Education</u>
          </h3>
        </div>
        <div className="row pl-3 pr-3">{EducationList}</div>
      </div>
    </div>
  );
};

export default Education;
