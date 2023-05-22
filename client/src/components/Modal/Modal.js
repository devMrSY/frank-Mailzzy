import { Button, Modal } from "react-bootstrap";
import AttachCsv from "./components/AttachCsv";
import EmailStatus from "./components/EmailStatus";
import TemplatePreview from "./components/TemplatePreview";
import { useSelector } from "react-redux";
import { arrOfArrayToArrOfObject } from "./components/AttachCsvService";
import { useState } from "react";

const CustomModal = (props) => {
  const [sendingEmailFlag, setSendingEmailFlag] = useState(false);
  const [emaiStatus, setEmaiStatus] = useState("");
  const closeModal = () => {
    props.setIsModal({
      attachCsc: false,
      emailStatus: false,
      previewTemplate: false,
    });
  };

  const csvDataFromRedux = useSelector((state) => state.data.csvData);
  const htmlRawFromRedux = useSelector((state) => state.data.htmlData);
  const headerFromRedux = useSelector((state) => state.data.csvHeader);

  const emailStatus = () => {
    return (
      <Modal show={props.isModal.emailStatus} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Email Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmailStatus emaiStatus={emaiStatus} />
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
      <Modal show={props.isModal.attachCsc} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Attach Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AttachCsv />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const shotEmail = async () => {
    let csvDataLength = csvDataFromRedux.length;
    let csvDataIndex = 0;
    if (csvDataFromRedux.length) {
      setSendingEmailFlag(true);
      const intervalId = setInterval(() => {
        if (csvDataLength > csvDataIndex) {
          const currentCsvData = csvDataFromRedux[csvDataIndex];
          //
          let updatedRawHtml = htmlRawFromRedux;
          const csvData = csvDataFromRedux
            ? csvDataFromRedux[csvDataIndex]
            : {};
          for (let index = 0; index < headerFromRedux.length; index++) {
            updatedRawHtml = updatedRawHtml.replace(
              `{{${headerFromRedux[index]}}}`,
              csvData[headerFromRedux[index]]
            );
          }
          //
          fetch("http://localhost:4000/api/sendemail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: currentCsvData?.from,
              to: currentCsvData?.to,
              subject: currentCsvData?.subject,
              text: currentCsvData?.text,
              html: updatedRawHtml,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              data["shoted"] = csvDataIndex;
              if (data.error) {
                // debugger;
                setEmaiStatus(data);
                throw { message: data.message };
              }
              setEmaiStatus(data);
            })
            .catch((error) => {
              // Handle any errors
              setEmaiStatus("Error Message\n" + error?.message);
              setSendingEmailFlag(false);
              clearInterval(intervalId);
              alert("Error Message\n" + error?.message);
            });
          csvDataIndex++;
        } else {
          clearInterval(intervalId);
          alert("Completed!!");
          setSendingEmailFlag(false);
        }
      }, 10000);
    } else {
      alert("csv data not found!!");
    }
  };

  const previewTemplate = () => {
    return (
      <Modal show={props.isModal.previewTemplate} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TemplatePreview />
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
          <Button
            variant='secondary'
            onClick={shotEmail}
            disabled={sendingEmailFlag}
          >
            {sendingEmailFlag ? "E- in progess" : "Start Emailing"}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      {emailStatus()}
      {attachCsv()}
      {previewTemplate()}
    </>
  );
};

export default CustomModal;
