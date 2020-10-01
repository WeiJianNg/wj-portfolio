import React from "react";
import Card from "react-bootstrap/Card";
import Labels from "./Labels";
import Button from "react-bootstrap/Button";
import "./main.css";
import { Icon } from "semantic-ui-react";

class ProjectHolder extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.projectImageHolder = React.createRef();
    this.projectBodyContent = React.createRef();
    this.projectTitleButton = React.createRef();
  }

  onProjectClick = (event) => {
    if (this.projectImageHolder.current.className === "project-image-holder") {
      this.projectImageHolder.current.className =
        "project-image-holder-toggled";
      this.projectBodyContent.current.className =
        "project-body-content-toggled";
      this.projectTitleButton.current.className = "see-app-button-toggled";
    } else {
      this.projectImageHolder.current.className = "project-image-holder";
      this.projectBodyContent.current.className = "project-body-content";
      this.projectTitleButton.current.className = "see-app-button";
    }
  };

  closeProjectClick = (event) => {
    if (
      this.projectImageHolder.current.className ===
      "project-image-holder-toggled"
    ) {
      this.projectImageHolder.current.className = "project-image-holder";
      this.projectBodyContent.current.className = "project-body-content";
      this.projectTitleButton.current.className = "see-app-button";
    }
  };

  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4 p-3 project-holder">
        <Card
          className="shadow animate__animated animate__zoomIn"
          style={{ height: "100%" }}
        >
          <Card.Body className="overflow-auto" style={{ height: "100%" }}>
            <Card.Title className="font-weight-bold d-flex">
              <div>{this.props.title}</div>
              <div
                className="see-app-button"
                style={{ marginLeft: "auto" }}
                ref={this.projectTitleButton}
              >
                <Button href={this.props.path} target="_blank" size="sm">
                  <Icon className="m-0" name={this.props.linkIcon} />
                </Button>
              </div>
            </Card.Title>
            <div
              className="project-image-holder"
              ref={this.projectImageHolder}
              style={{
                backgroundImage: `url(${this.props.image})`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="project-image-buttons-holder"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outline-primary"
                  className="project-image-buttons"
                  onClick={this.onProjectClick}
                >
                  Details
                </Button>
                <div className="imageDivider"></div>
                {this.props.path !== "" ? (
                  <Button variant="outline-primary">See App</Button>
                ) : (
                  <Button
                    variant="outline-primary"
                    href={this.props.link}
                    target="_blank"
                  >
                    Github
                  </Button>
                )}
              </div>
            </div>
            <div
              className="project-body-content"
              ref={this.projectBodyContent}
              onClick={this.closeProjectClick}
            >
              <hr className="mt-0" />
              <div style={{ textAlign: "justify" }}>{this.props.children}</div>
            </div>
          </Card.Body>
          <Card.Footer>
            {this.props.programmingLang.map((elm, index) => {
              return (
                <Labels
                  language={elm}
                  key={`${this.props.title}_language_${index}`}
                />
              );
            })}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default ProjectHolder;
