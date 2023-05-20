import { Button, Modal } from "react-bootstrap";
import AttachCsv from "./components/AttachCsv";
import EmailStatus from "./components/EmailStatus";

const CustomModal = (props) => {
  const emailStatus = () => {
    return (
      <Modal
        show={props.isModal.emailStatus}
        onHide={() =>
          props.setIsModal({
            attachCsc: false,
            emailStatus: false,
          })
        }
      >
        <Modal.Header closeButton>
          <Modal.Title>Email Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmailStatus />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => props.setIsModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const attachCsv = () => {
    return (
      <Modal
        show={props.isModal.attachCsc}
        onHide={() =>
          props.setIsModal({
            attachCsc: false,
            emailStatus: false,
          })
        }
      >
        <Modal.Header closeButton>
          <Modal.Title>Attach Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AttachCsv />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() =>
              props.setIsModal({
                attachCsc: false,
                emailStatus: false,
              })
            }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      {emailStatus()}
      {attachCsv()}
    </>
  );
};

export default CustomModal;
