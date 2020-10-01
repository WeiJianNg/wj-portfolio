import React from "react";
import ProjectHolder from "./ProjectHolder/ProjectHolder";
import ProjectData from "./Data/ProjectData";

const AppHolder = (props) => {
  return (
    <div className="pt-3" style={{ backgroundColor: "#BFC0C0" }}>
      <div className="container">
        <div className="row">
          <h3 className="pl-3 pr-3">Personal Projects</h3>
        </div>
        <div className="row">
          {ProjectData.map((project, index) => {
            return (
              <ProjectHolder
                key={`${project.title}_project_${index}`}
                title={project.title}
                image={project.image}
                path={project.path}
                link={project.link}
                linkIcon={project.linkIcon}
                programmingLang={project.language}
              >
                <div>
                  {project.aims.length !== 0 ? (
                    <React.Fragment>
                      <h5>Aim:</h5>
                      <div className="ui ordered list">
                        {project.aims.map((aim, index) => {
                          return (
                            <div
                              key={`${project.title}_aim_${index}`}
                              className="item"
                            >
                              {aim}
                            </div>
                          );
                        })}
                      </div>
                      <hr />
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                  {project.lessons.length !== 0 ? (
                    <React.Fragment>
                      <h5>lessons:</h5>
                      <div className="ui ordered list">
                        {project.lessons.map((aim, index) => {
                          return (
                            <div
                              key={`${project.title}_lessons_${index}`}
                              className="item"
                            >
                              {aim}
                            </div>
                          );
                        })}
                      </div>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                </div>
              </ProjectHolder>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppHolder;
