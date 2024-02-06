import React from "react";
import FormFirstPage from "./FormPages/FormFirstPage";
import FormSecondPage from "./FormPages/FormSecondPage";
import FormThirdPage from "./FormPages/FormThirdPage";
import Button from "./Button";
import FakePromises from "../utils/FakePromises";
import SubmitPage from "./SubmitPage";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Modal from "./Modal";
class TTCForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      genericStringValue: "",
      vowelValue: "",
      numberValue: "",
      dateValue: "",
      groupBoxValues: [],
      showModal: false,

      modalText: "",
    };
    this.firstHandler = this.firstHandler.bind(this);
    this.secondHandler = this.secondHandler.bind(this);
    this.thirdHandler = this.thirdHandler.bind(this);
    this.parentSetState = this.parentSetState.bind(this);
    this.multipleCheckboxHandler = this.multipleCheckboxHandler.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  multipleCheckboxHandler(e) {
    let newCheckedBox = e.target.getAttribute("val");
    if (!this.state.groupBoxValues.includes(newCheckedBox)) {
      this.setState({
        groupBoxValues: [newCheckedBox, ...this.state.groupBoxValues],
      });
    } else {
      let result = [];
      this.state.groupBoxValues.forEach((elem) => {
        if (elem != newCheckedBox) {
          result.push(newCheckedBox);
        }
      });
      this.setState({ groupBoxValues: result });
    }
  }
  handleModalClose(e) {
    this.setState({ showModal: false });
  }
  parentSetState(state) {
    this.setState(state);
  }

  firstHandler() {
    FakePromises.firstPromise(this.state)
      .then((resp) => {
        this.setState({ page: 2 });
      })
      .catch((resp) => {
        this.setState({
          showModal: true,
          modalText: "Any String, Any vowel, 42",
        });
      });
  }

  secondHandler() {
    FakePromises.secondPromise(this.state)
      .then((resp) => {
        this.setState({ page: 3 });
      })
      .catch((resp) => {
        this.setState({ showModal: true, modalText: "Choose a future date" });
      });
  }

  thirdHandler() {
    FakePromises.thirdPromise(this.state)
      .then((resp) => {
        this.setState({ submitted: true });
      })
      .catch((resp) => {
        this.setState({ showModal: true, modalText: "Check the first box" });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="form">
          <div className="miniButtons">
            {!(this.state.page == 1) && !this.state.submitted && (
              <Button
                className="button"
                clickhandler={() =>
                  this.setState({ page: this.state.page - 1 })
                }
              >
                {"<"}
              </Button>
            )}
          </div>
          <div className="fields">
            {this.state.page == 1 ? (
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={this.state.page}
                  addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                  classNames="fade"
                >
                  <FormFirstPage
                    parentSetState={this.parentSetState}
                    genericStringValue={this.state.genericStringValue}
                    vowelValue={this.state.vowelValue}
                    numberValue={this.state.numberValue}
                  ></FormFirstPage>
                </CSSTransition>
              </SwitchTransition>
            ) : this.state.page == 2 ? (
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={this.state.page}
                  addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                  classNames="fade"
                >
                  <FormSecondPage
                    parentSetState={this.parentSetState}
                    dateValue={this.state.dateValue}
                  ></FormSecondPage>
                </CSSTransition>
              </SwitchTransition>
            ) : this.state.submitted ? (
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={this.state.page}
                  addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                  classNames="fade"
                >
                  <SubmitPage
                    genericStringValue={this.state.genericStringValue}
                    vowelValue={this.state.vowelValue}
                    numberValue={this.state.numberValue}
                    dateValue={this.state.dateValue}
                    groupBoxValues={this.state.groupBoxValues}
                    firstCheckbox={this.state.firstCheck}
                  ></SubmitPage>
                </CSSTransition>
              </SwitchTransition>
            ) : (
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={this.state.page}
                  addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                  classNames="fade"
                >
                  <FormThirdPage
                    parentSetState={this.parentSetState}
                    multipleCheckboxHandler={this.multipleCheckboxHandler}
                  ></FormThirdPage>
                </CSSTransition>
              </SwitchTransition>
            )}
          </div>
          <div className="buttons">
            {!(this.state.page == 1) && !this.state.submitted && (
              <Button
                className="button"
                clickhandler={() =>
                  this.setState({ page: this.state.page - 1 })
                }
              >
                {"back"}
              </Button>
            )}
            {!this.state.submitted && (
              <Button
                className="button"
                clickhandler={
                  this.state.page == 1
                    ? this.firstHandler
                    : this.state.page == 2
                    ? this.secondHandler
                    : this.thirdHandler
                }
              >
                {this.state.page == 3 && !this.state.submitted
                  ? "final Submit"
                  : "next page "}
              </Button>
            )}
          </div>
          <div className="miniButtons">
            {!this.state.submitted && (
              <Button
                className="button"
                clickhandler={
                  this.state.page == 1
                    ? this.firstHandler
                    : this.state.page == 2
                    ? this.secondHandler
                    : this.thirdHandler
                }
              >
                {">"}
              </Button>
            )}
          </div>
        </div>

        <Modal show={this.state.showModal} handleClose={this.handleModalClose}>
          <h3>{this.state.modalText}</h3>
        </Modal>
      </React.Fragment>
    );
  }
}

export default TTCForm;
