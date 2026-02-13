import { useState } from "react";
import "./style/webpage.css";
import box from "../assets/1.png";
import flower from "../assets/flower.png";


function Weppage() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [showBox, setShowBox] = useState(true);
    const [showFlower, setShowFlower] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    const handleClick = () => {
        // Play audio on click
        const audio = document.getElementById("bgm") as HTMLAudioElement | null;
        if (audio) {
            audio.volume = 1;
            audio.currentTime = 0; // optional: restart from beginning
            audio.play();
        }

        // Start box fade out
        setFadeOut(true);

        setTimeout(() => {
            setShowParagraph(true);
            setShowBox(false);
            setShowFlower(true);
            setFadeIn(true);
        }, 500); // match CSS duration
    };

    return (
        <div className="web-page">
            {/* Audio element (hidden, no controls) */}
            <audio id="bgm" src="src/assets/violet-letter.MP3" loop />

            <div className="frame-page-title">
                {showParagraph && (
                    <div className={`paragraph ${fadeIn ? "fade-in" : ""}`}>
                        Happy Valentine Day
                    </div>
                )}
            </div>

            <div className="frame-page-content">
                <div className="content-frame">
                    {showBox && (
                        <img
                            src={box}
                            className={`box ${fadeOut ? "fade-out" : ""}`}
                            alt="box"
                            onClick={handleClick}
                        />
                    )}

                    {showFlower && (
                        <img
                            src={flower}
                            className={`flower ${fadeIn ? "fade-in" : ""}`}
                            alt="flower"
                        />
                    )}

                </div>
            </div>

            <div className="frame-page-credit"></div>
        </div>
    );
}

export default Weppage;