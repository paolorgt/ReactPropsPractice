import React from "react";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">Beyonce</h2>
          <img className="circle-img"
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <div className="info">
          <p>+123 456 789</p>
          <p>b@beyonce.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
