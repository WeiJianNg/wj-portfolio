import React from "react";

let ExperienceHolder = (props) => {
  let descriptionList = props.description.map((item, index) => {
    let subdescriptionList = null;
    if (props.subdescription) {
      subdescriptionList = props.subdescription[index].map(
        (subdescription, subindex) => {
          return <li key={props.description + subindex}>{subdescription}</li>;
        }
      );
    }
    return (
      <li key={props.title + index}>
        {item}
        <ul className="pb-1">{subdescriptionList}</ul>
      </li>
    );
  });

  return (
    <div className="col-12 shadow p-3 mt-2 mb-3 bg-white rounded animate__animated animate__zoomIn">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8 d-flex justify-content-start">
            <h5 className="m-0">{props.title}</h5>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-end">
            <h5 className="m-0">{props.date}</h5>
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-2">
        <ul>{descriptionList}</ul>
      </div>
    </div>
  );
};

export default ExperienceHolder;
