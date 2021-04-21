import React, { useState, useEffect } from "react";
import "./TeacherQuestionPool.css";
import { connect } from "react-redux";
import * as actions from "../../../actions/QuestionPoolActions";

import TeacherEditQuestionPool from "../TeacherEditQuestionPool/TeacherEditQuestionPool";

import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const TeacherQuestionPool = ({ ...props }) => {
  const [modal, setModal] = useState(false);
  const [poolID, setpoolID] = useState();
  function toggle() {
    setModal(!modal);
  }

  useEffect(() => {
    props.fetchallquestionpoolsbyteacher(props.user.id);
  }, []);
  return (
    <div>
      <div className="mt-5">
        <div className="container">
          <div className="row">
            {props.teacherQuestionPoolList.map((questionPool) => {
              return (
                <div className="col-lg-4 p-2 mt-2">
                  <div class="card TeacherQuestionPools">
                    <div class="card-body">
                      <h5 class="card-title">
                        {questionPool.questionPoolName}
                      </h5>
                      <p class="card-text">
                        Enrollment Key : {questionPool.enrollmentKey}
                      </p>
                      <div className="row rowCards">
                        <div className="col-lg-4 col-md-4 col-sm-4 colCards">
                          <button className="btn btn-success">
                            <AddCircleOutlinedIcon />
                          </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 colCards">
                          <button
                            className="btn btn-warning"
                            onClick={() => {
                              toggle();
                              setpoolID(questionPool.id);
                            }}
                          >
                            <EditIcon />
                          </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 colCards">
                          <button className="btn btn-danger">
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <!-- Modal For Edit Question Pool Details--> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>EDIT | QUESTION POOL</ModalHeader>
        <ModalBody>
          <TeacherEditQuestionPool dataPoolId={poolID} />
        </ModalBody>
      </Modal>
      {/* <!--End of Modal For Edit Question Pool Details--> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  teacherQuestionPoolList: state.questionPoolReducer.teacherQuestionPoolList,
  user: state.authReducer.user,
});

const mapActionToProps = {
  fetchallquestionpoolsbyteacher: actions.fetchAllByTeacher,
};

export default connect(mapStateToProps, mapActionToProps)(TeacherQuestionPool);
