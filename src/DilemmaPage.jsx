import React, { useState, useEffect } from "react";
import "./DilemmaPage.css";
import { useParams } from 'react-router-dom';


const DilemmaPage = () => {
  const { code } = useParams();

  const [currentDilemma, setCurrentDilema] = useState("D1");
  const [currentDilemmaIndex, setCurrentDilemmaIndex] = useState(0);
  const [dilemmas, setDilemmas] = useState(null);
  useEffect(() => {
    fetch(`https://hlsplay.tk/minuteanime/${code}.json`)
      .then((res) => res.json())
      .then((data) => setDilemmas(data));
  }, []);


  const handleChoice = (choice) => {
    if (dilemmas) {
      const dilemmasKeys = Object.keys(dilemmas);
      const nextDilemmaKey = dilemmasKeys[currentDilemmaIndex + 1];

      if (nextDilemmaKey) {
        setCurrentDilema(nextDilemmaKey);
        setCurrentDilemmaIndex(currentDilemmaIndex + 1);
      }
    }
  };

  

  const handleBackClick = () => {
    if (dilemmas) {
      const dilemmasKeys = Object.keys(dilemmas);
      const previousDilemmaKey = dilemmasKeys[currentDilemmaIndex - 1];
      setCurrentDilemmaIndex(currentDilemmaIndex - 1);
      setCurrentDilema(previousDilemmaKey);
    }
  };

  return (
    <>
      <div className="dilemma-page">
        {dilemmas && currentDilemma != "Final" && (
          <>
            <div className="left-answer" onClick={() => handleChoice("R1")}>
              <span className="Reponse">{dilemmas[currentDilemma].R1}</span>
            </div>
            <div className="right-answer" onClick={() => handleChoice("R2")}>
              <span className="Reponse">{dilemmas[currentDilemma].R2}</span>
            </div>
          </>
        )}
        {dilemmas && currentDilemma == "Final" && (
          <div className="final">
            {" "}
            <span className="msgFinal">MERCI POUR TA PARTICIPATION</span>
            <span className="msgCredits"> MINUTE ANIME</span>
          </div>
        )}
      </div>
      <div className="back-button-container">
        {dilemmas && currentDilemmaIndex > 0  && (
          <button className="back-button" onClick={handleBackClick}>
            <i className="fa fa-arrow-left"></i>
            <span>Retour</span>
          </button>
        )}
      </div>
      <div className="back-icon-container">
        {window.innerWidth < 767 && currentDilemmaIndex > 0 && (
          <button onClick={handleBackClick} className="icon-button">
            <span>Retour</span>
          </button>
        )}
      </div>
    </>
  );
};

export default DilemmaPage;
