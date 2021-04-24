import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/OptionActions";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";

class TeacherOptions extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      modal: false,
      deleteStatusAlert: "",
      deleteStatusMessage: "",
    };
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  deleteOptionById(id) {
    this.setState({
      modal: !this.state.modal,
      deleteStatusAlert: "alert alert-warning",
      deleteStatusMessage: "Please Wait...",
    });
    this.props.deleteOption(
      id,
      () => {
        this.setState({
          deleteStatusAlert: "alert alert-danger",
          deleteStatusMessage: "Successfully Removed",
        });
      },
      () => {
        this.setState({
          deleteStatusAlert: "alert alert-warning",
          deleteStatusMessage: "Something Went Wrong",
        });
      }
    );
  }

  render() {
    return (
      <div>
        {this.props.question.options.map((option, index) => {
          return (
            <div className="col-lg-12">
              <h6>
                {++index}. {option.optionText}
                <button
                  className="btn btnBackgroundNone btn-sm"
                  onClick={() => {
                    this.deleteOptionById(option.id);
                  }}
                >
                  <DeleteOutlineRoundedIcon />
                </button>
              </h6>
            </div>
          );
        })}
        {/* <!-- Modal For Edit Question Pool Details--> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>REMOVE OPTION</ModalHeader>
          <ModalBody>
            {" "}
            <div class={this.state.deleteStatusAlert} role="alert">
              {this.state.deleteStatusMessage}
            </div>
          </ModalBody>
        </Modal>
        {/* <!--End of Modal For Edit Question Pool Details--> */}
      </div>
    );
  }
}

const mapActionToProps = {
  deleteOption: actions.DeleteOption,
};

export default connect(null, mapActionToProps)(TeacherOptions);
