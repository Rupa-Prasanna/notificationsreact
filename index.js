const Notification = (props) => {
  const { className, text } = props;
  return <p className={className}> {text} </p>;
};

const element = (
  <div className="container">
    <h1> Notifications </h1>
    <div>
      <div className="card-container1">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification text="Information Message" className="card1" />
      </div>
      <div className="card-container2">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification text="Success Message" className="card2" />
      </div>
      <div className="card-container3">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification text="Warning Message" className="card3" />
      </div>
      <div className="card-container4">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
        <Notification text="Error Message" className="card4" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
