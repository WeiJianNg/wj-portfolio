import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "animate.css/animate.min.css";

import Navigation from "./Components/Navigation/Navigation";
import Summary from "./Components/Summary/Summary";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";

var App = () => {
  return (
    <div>
      <Navigation />
      <Summary />
      <Projects />
      <Education />
    </div>
  );
};

export default App;
