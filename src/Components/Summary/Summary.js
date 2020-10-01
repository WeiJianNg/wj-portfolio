import React from "react";
import Button from "react-bootstrap/Button";

var Summary = () => {
  var expandable = React.createRef();

  var toggleContent = () => {
    var className = expandable.current.className;
    if (className !== "d-block animate__animated animate__fadeIn") {
      expandable.current.className =
        "d-block animate__animated animate__fadeIn";
    } else {
      expandable.current.className = "d-none";
    }
  };

  return (
    <div style={{ backgroundColor: "#F7F7F9" }}>
      <div className="pt-4 pb-4 container text-justify">
        <h2>Ng Wei Jian</h2>
        <h4>Computer Scientist / Civil Engineer</h4>
        <p>
          I have a Civil Engineering background and I love to code. Currently, I
          am pursuing a MSc in Computing Science at Imperial College London as I
          wish to reinforce my programming knowledge.
        </p>
        <div className="d-none d-md-block" ref={expandable}>
          <p>
            My interests in programming developed when I was first exposed to
            MATLAB during my undergraduate studies, where we were taught to
            solve numerical problems using programming. Upon graduation, I have
            joined a civil engineering company and my interests in programming
            only grew deeper as I discovered the immense opportunity programming
            can bring to a project, in both time and cost saving.
          </p>
          <p>
            Over the years, I have spent my after work hours exploring different
            technology and programming languages. I have developed a couple of
            automation of scripts for work using Python and front-end
            applications using React-Redux.
          </p>
        </div>
        <Button
          onClick={() => {
            toggleContent();
          }}
          className="mt-3 d-block d-md-none"
          size="sm"
        >
          Expand
        </Button>
        {/* Expandable */}
      </div>
    </div>
  );
};

export default Summary;
