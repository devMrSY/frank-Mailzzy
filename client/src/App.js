import { useState } from "react";
import Editor from "./components/Editor/Editor";
import CustomModal from "./components/Modal/Modal";
import { Button } from "react-bootstrap";
function App() {
  const [isModal, setIsModal] = useState({
    attachCsc: false,
    emailStatus: false,
  });

  const getModal = (modalType) => {
    if (modalType === "csv") setIsModal({ ...isModal, attachCsc: true });
    if (modalType === "emailStatus")
      setIsModal({ ...isModal, emailStatus: true });
  };

  const getButton = () => {
    return (
      <>
        <Button variant='primary' onClick={() => getModal("csv")}>
          Attach Csv
        </Button>
        <Button variant='primary' onClick={() => getModal("emailStatus")}>
          Email Status
        </Button>
      </>
    );
  };

  return (
    <div className='App'>
      {getButton()}
      {getModal()}
      <Editor />
      {isModal && <CustomModal isModal={isModal} setIsModal={setIsModal} />}
    </div>
  );
}

export default App;
