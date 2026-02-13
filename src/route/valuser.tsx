import { useState } from "react";
import "./style/webpage.css";
import box from "../assets/1.png";
import flower1 from "../assets/flower/public 1.png";
import flower2 from "../assets/flower/public 2.png";
import flower3 from "../assets/flower/public 3.png";
import flower4 from "../assets/flower/public 4.png";
import flower5 from "../assets/flower/public 5.png";
import letter from "../assets/letter/public letter.png";
import creditsymbol from "../assets/music symbol.png";
import bgm from "../assets/violet-letter.mp3";

function Valuser() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [showLetter, setShowLetter] = useState(true);
  const [showBox, setShowBox] = useState(false);
  const [showPoetCont, setPoetCont] = useState(false);
  const [showPoet1, setShowPoet1] = useState(false);
  const [showPoet2, setShowPoet2] = useState(false);
  const [showPoet3, setShowPoet3] = useState(false);
  const [showFlower, setShowFlower] = useState(false);
  const [showCredit, setShowCredit] = useState(false);
  const [showCreditSymbol, setShowCreditSymbol] = useState(false);

  const [fadeLetter, setFadeLetter] = useState(false);
  const [fadePoet1, setFadePoet1] = useState(false);
  const [fadePoet2, setFadePoet2] = useState(false);
  const [fadePoet3, setFadePoet3] = useState(false);
  const [fadeBox, setFadeBox] = useState(false);
  const [fadeParagraph, setFadeParagraph] = useState(false);
  const [fadeCredit, setFadeCredit] = useState(false);
  const [fadeCreditSymbol, setFadeCreditSymbol] = useState(false);

  // 🌸 Random flower chooser
  const flowers = [flower1, flower2, flower3, flower4, flower5];
  const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];

  const handleLetterClick = () => {
    setFadeLetter(true);

    const audio = document.getElementById("bgm") as HTMLAudioElement | null;
    if (audio) {
      audio.volume = 1;
      audio.currentTime = 0;
      audio.play();
    }

    setShowCredit(true);
    setShowCreditSymbol(true);
    setFadeCredit(true);
    setFadeCreditSymbol(true);

    setTimeout(() => {
      setShowLetter(false);
      setPoetCont(true);

      setShowPoet1(true);
      setFadePoet1(true);

      setTimeout(() => {
        setShowPoet2(true);
        setFadePoet2(true);

        setTimeout(() => {
          setShowPoet3(true);
          setFadePoet3(true);

          setTimeout(() => {
            setFadePoet1(false);
            setTimeout(() => setShowPoet1(false), 4000);

            setFadePoet2(false);
            setTimeout(() => setShowPoet2(false), 4000);

            setFadePoet3(false);
            setTimeout(() => setShowPoet3(false), 4000);

            setTimeout(() => {
              setPoetCont(false);
              setShowBox(true);
            }, 4500);
          }, 4500);
        }, 4500);
      }, 4500);
    }, 4000);
  };

  const handleBoxClick = () => {
    setFadeBox(true);
    setShowCredit(true);

    setTimeout(() => {
      setShowBox(false);
      setFadeBox(false);
      setShowFlower(true);
      setShowParagraph(true);
      setFadeParagraph(true);
    }, 4000);
  };

  return (
    <div className="web-page">
      <audio id="bgm" src={bgm} loop />

      <div className="frame-page-title">
        {showParagraph && (
          <div className={`title ${fadeParagraph ? "fade-in" : ""}`}>
            Happy Valentine's Day
          </div>
        )}
      </div>

      <div className="frame-page-content">
        <div className="content-frame">
          {showLetter && (
            <img
              src={letter}
              className={`letter ${fadeLetter ? "fade-out" : ""}`}
              alt="letter"
              onClick={handleLetterClick}
            />
          )}

          {showPoetCont && (
            <div className="poet-container">
              {showPoet1 && (
                <div className={`poet1 ${fadePoet1 ? "fade-in" : "fade-out"}`}>
                  Love is never loud—
                </div>
              )}
              {showPoet2 && (
                <div className={`poet2 ${fadePoet2 ? "fade-in" : "fade-out"}`}>
                  it lives in quiet moments and gentle silence,
                </div>
              )}
              {showPoet3 && (
                <div className={`poet3 ${fadePoet3 ? "fade-in" : "fade-out"}`}>
                  and stays… even when words fade.
                </div>
              )}
            </div>
          )}

          {showBox && (
            <img
              src={box}
              className={`box ${fadeBox ? "fade-out" : "fade-in"}`}
              alt="box"
              onClick={handleBoxClick}
            />
          )}

          {showFlower && (
            <img
              src={randomFlower}
              className={`flower ${fadeParagraph ? "fade-in" : ""}`}
              alt="flower"
            />
          )}
        </div>
      </div>

      <div className="frame-page-credit">
        {showCreditSymbol && (
          <img
            src={creditsymbol}
            className={`creditsymbol ${fadeCreditSymbol ? "fade-in" : ""}`}
            alt="creditsymbol"
          />
        )}
        {showCredit && (
          <div className={`credit ${fadeCredit ? "fade-in" : ""}`}>
            Violet Letter - Evan Call
          </div>
        )}
      </div>
    </div>
  );
}

export default Valuser;