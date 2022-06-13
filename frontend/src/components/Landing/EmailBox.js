import "./EmailBox.css";

const EmailBox = (props) => {
  return (
    <div className="emailBox">
      <div className="emailContent"> Can I send you an email?</div>
      <div className="yesContainer">
        {" "}
        <a className="yesButton" href="/email">
          Yes
        </a>
      </div>
    </div>
  );
};

export default EmailBox;
