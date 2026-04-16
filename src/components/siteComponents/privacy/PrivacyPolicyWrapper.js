import React, { useState, useEffect } from "react";
import Priv from "./PrivacyPolicy.module.scss";
import Locale from "./../../../utils/Locale";
import PrivacyModal from "./PrivacyModal";

const STORAGE_KEY = "privacyAcknowledged";
const CURRENT_VERSION = 2;

function readAck() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === CURRENT_VERSION) return parsed;
    return null;
  } catch {
    return null;
  }
}

const PrivacyPolicyWrapper = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!readAck()) setShowBanner(true);
  }, []);

  const acknowledge = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ acknowledged: true, at: new Date().toISOString(), version: CURRENT_VERSION })
    );
    setShowBanner(false);
  };

  const openPolicy = () => setShowModal(true);
  const closePolicy = () => setShowModal(false);

  return (
    <>
      {showBanner && (
        <div className={Priv.banner} role="dialog" aria-labelledby="privacy-banner-title">
          <div className={Priv.bannerContent}>
            <h2 id="privacy-banner-title" className={Priv.bannerTitle}>
              {Locale.GetMessages("privacy_title")}
            </h2>
            <p className={Priv.bannerText}>{Locale.GetMessages("privacy_summary")}</p>
            <div className={Priv.bannerActions}>
              <button className={Priv.secondary} onClick={openPolicy}>
                {Locale.GetMessages("privacy_learnmore")}
              </button>
              <button className={Priv.primary} onClick={acknowledge}>
                {Locale.GetMessages("privacy_gotit")}
              </button>
            </div>
          </div>
        </div>
      )}
      <PrivacyModal show={showModal} onClose={closePolicy} />
    </>
  );
};

export default PrivacyPolicyWrapper;
