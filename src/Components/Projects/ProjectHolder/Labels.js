import JavascriptImg from "./images/icons8-javascript-48.png";
import DjangoImg from "./images/icons8-django-48.png";
import PythonImg from "./images/icons8-python-96.png";
import ReactImg from "./images/icons8-react-40.png";
import VBImg from "./images/icons8-vb-40.png";
import { Label } from "semantic-ui-react";
import React from "react";

class Labels extends React.Component {
  state = { labelImg: "" };
  checkSource(language) {
    if (language === "Javascript") {
      return JavascriptImg;
    } else if (language === "Django") {
      return DjangoImg;
    } else if (language === "Python") {
      return PythonImg;
    } else if (language === "React") {
      return ReactImg;
    } else {
      return VBImg;
    }
  }
  render() {
    return (
      <Label image size={"tiny"}>
        <img alt="" src={this.checkSource(this.props.language)} />
        {this.props.language}
      </Label>
    );
  }
}

export default Labels;
