import React from "react";

let EducationHolder = (props) => {
  let descriptionList = props.description.map((item) => {
    return <li>{item}</li>;
  });
  return (
    <div className="col-12 shadow p-3 mt-2 mb-3 bg-white rounded">
      <div className="d-flex justify-content-between">
        <h5 className="m-0">{props.title}</h5>
        <h5 className="m-0">{props.date}</h5>
      </div>
      <div>
        <ul>{descriptionList}</ul>
      </div>
    </div>
  );
};

export default EducationHolder;
