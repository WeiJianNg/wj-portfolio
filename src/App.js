import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "animate.css/animate.min.css";

import Navigation from "./Components/Navigation/Navigation";
import Summary from "./Components/Summary/Summary";
import Projects from "./Components/Projects/Projects";

var App = () => {
  return (
    <div>
      <Navigation />
      <Summary />
      <Projects />
    </div>
  );
};

export default App;
