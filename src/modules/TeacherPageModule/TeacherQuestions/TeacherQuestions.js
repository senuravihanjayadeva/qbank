import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../../actions/QuestionPoolActions";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import TeacherCreateQuestions from "../TeacherCreateQuestions/TeacherCreateQuestions";
import AddIcon from "@material-ui/icons/Add";
import TeacherCreateOptions from "../TeacherCreateOptions/TeacherCreateOptions";

const TeacherQuestions = ({ ...props }) => {
  const [modal, setModal] = useState(false);
  const [questionID, setquestionID] = useState();
  function toggle() {
    setModal(!modal);
  }
  let { questionpoolname, id } = useParams();
  useEffect(() => {
    props.fetchQuestionPoolByID(id);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3> {questionpoolname}</h3>
          </div>

          <div className="container">
            {props.questionPool !== ""
              ? props.questionPool.questions &&
                props.questionPool.questions.map((question, index) => {
                  return (
                    <div className="col-lg-12">
                      <div className="row">
                        <div>
                          {" "}
                          <h4>
                            ( {++index} ) {question.questionText}{" "}
                            <button
                              className="btn btn-warning btn-sm"
                              onClick={() => {
                                setquestionID(question.id);
                                toggle();
                              }}
                            >
                              <AddIcon />
                            </button>
                          </h4>
                        </div>
                      </div>

                      {question.options.map((option, index) => {
                        return (
                          <div className="col-lg-12">
                            <h6>
                              {++index}. {option.optionText}
                            </h6>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              : ""}
          </div>

          <div>
            <TeacherCreateQuestions poolId={id} />
          </div>
        </div>
      </div>
      {/* <!-- Modal For Edit Question Pool Details--> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>CREATE | OPTION</ModalHeader>
        <ModalBody>
          <TeacherCreateOptions dataQuestionID={questionID} />
        </ModalBody>
      </Modal>
      {/* <!--End of Modal For Edit Question Pool Details--> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  questionPool: state.questionPoolReducer.currentQuestionPool,
});

const mapActionToProps = {
  fetchQuestionPoolByID: actions.fetchById,
};

export default connect(mapStateToProps, mapActionToProps)(TeacherQuestions);
