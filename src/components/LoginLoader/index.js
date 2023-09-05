import React from "react";
import Popup from 'reactjs-popup';
import {Rings} from "react-loader-spinner"
import 'reactjs-popup/dist/index.css';
import "./index.css"; 

const LoginLoader = ({loadStatus}) => (
  <div className="popup-container">
    {loadStatus && (
      <div className="overlay">
        <Popup
          open={loadStatus} // Open the popup when adminStatus is true
          closeOnDocumentClick={false} // Prevent closing when clicking outside
          position="center center"
        >
        <div className="popup-content">
            <div className="loader-container">
                <Rings type="spinner" color="#00BFFF" height={100} width={100} />
            </div>
        </div>
        </Popup>
      </div>
    )}
  </div>
);

export default LoginLoader;
