const EmailStatus = (props) => {
  console.log(props, "******");
  return (
    <>
      <h3>Number of shoted {props?.emaiStatus?.shoted}</h3>
      {props.emaiStatus
        ? JSON.stringify(props.emaiStatus, null, 2)
        : "No status availbale"}
    </>
  );
};

export default EmailStatus;
