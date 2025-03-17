import React, { useState, useEffect } from "react";
import Priv from "./PrivacyPolicy.module.scss";
import Locale from "./../../../utils/Locale"
const STORAGE_KEY = "privacyAccepted";

const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className={`${Priv.privacypolicy}`}>
      <div className={`${Priv.privaccontent}`}>
        <h2>Privacy</h2>

         <p>{Locale.GetMessages("privacy")}

          </p>
        <button className={`${Priv.privacybutton}`} onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

const PrivacyPolicyWrapper = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    // Check if the user has accepted the policy
    const hasAccepted = localStorage.getItem(STORAGE_KEY);
    if (!hasAccepted) {
      setShowPolicy(true);
    }
  }, []);

  const handleAccept = () => {
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, "true");
    setShowPolicy(false);
  };

  return <>{showPolicy && <PrivacyPolicy onClose={handleAccept} />}</>;
};

export default PrivacyPolicyWrapper;
