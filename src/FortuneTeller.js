import React, { useEffect, useState } from "react";

const idleFrames = ["cat1.png", "cat2.png", "cat3.png", "cat4.png"];
const fortuneFrames = [
  "fortune1.png",
  "fortune2.png",
  "fortune3.png",
  "fortune4.png",
  "fortune5.png",
  "fortune6.png",
  "up.png",
];

export default function FortuneTeller() {
  const [currentImage, setCurrentImage] = useState("cat1.png");
  const [mode, setMode] = useState("idle");
  const [buttonText, setButtonText] = useState("Get My Fortune");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [IsHoveringPotion1, setIsHoveringPotion1] = useState(false);
  const [IsHoveringPotion2, setIsHoveringPotion2] = useState(false);
  const [IsHoveringBook1, setIsHoveringBook1] = useState(false);
  const [IsHoveringJar1, setIsHoveringJar1] = useState(false);
  const [IsHoveringPotion3, setIsHoveringPotion3] = useState(false);

  const fortunes = [
    "Yes 🌟",
    "No 🚫",
    "Maybe... 🤔",
    "Ask again later 🕐",
    "If you want! 😺",
    "Absolutely! Unless Mercury’s in retrograde again 🥴",
    "Definitely 🧿",
    "Unclear 🤷",
    "Absolutely not 💀",
    "The stars aligned just for you. Go for it! ✨",
    "Don’t count on it 🧩",
    "Sure, if you enjoy a little drama 😈",
    "The stars say yes... but they’ve lied before ⭐",
    "Try again tomorrow 🌙",
    "Nah, unless you’re into bad decisions 😑",
    "Yes, but only on Tuesdays under a full moon 🌑",
    "Cupid says yes… but he’s been drinking 🍹",
    "The heart says yes, the brain says girl, no.",
    "Yes, but don’t check your bank account right after...",
    "Not unless you're planning to marry rich. Soon 💸",
    "Yes, but say goodbye to your peace of mind.",
    "No, but something even messier is coming.",
    "Yes, but only because the universe is bored 🤪",
    "Sure. What could possibly go wrong? (Everything.)",
    "No. And honestly, thank goodness.",
    "No. But feel free to ignore me 👋",
    "Nope. Not even if you begged the stars.",
    "You already know the answer. You just don’t like it.",
    "The spirits went on strike. Try later 👻",
    "Why would you even ask that? 😟",
    "I'm not a miracle worker. I'm a glass orb 😐",
    "The spirits said no, but like… in a flirty way 👀",
    "You don’t want to know. Trust me 😳",
  ];
  const [fortuneText, setFortuneText] = useState("");


  useEffect(() => {
    let interval;
    if (mode === "idle") {
      interval = setInterval(() => {
        setFrameIndex((prev) => {
          const next = (prev + 1) % idleFrames.length;
          setCurrentImage(idleFrames[next]);
          return next;
        });
      }, 350);
    }
    return () => clearInterval(interval);
  }, [mode]);

  const handleClick = () => {
    if (mode === "idle") {
      setMode("fortune");
      setButtonDisabled(true);
      setButtonText("Revealing...");
      setCurrentImage("cat1.png");

      setTimeout(() => {
        let i = 0;
        const fortuneInterval = setInterval(() => {
          if (i < fortuneFrames.length) {
            setCurrentImage(fortuneFrames[i]);
            i++;
          } else {
            clearInterval(fortuneInterval);
            setButtonDisabled(false);
            setButtonText("Ask Again");
            // Pick a random fortune
            const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            setFortuneText(randomFortune);
          }
        }, 250);
      });
    } else {
      setMode("idle");
      setFrameIndex(0);
      setCurrentImage("cat1.png");
      setButtonText("Get My Fortune");
      setFortuneText("");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: 'url("bg.png")',
        backgroundColor: "#26130a",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center",
        backgroundSize: "80%",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <button
        onClick={handleClick}
        disabled={buttonDisabled}
        style={{
          fontSize: "1rem",
          padding: "1.0rem 1.5rem",
          marginTop: "60px",
          backgroundColor: buttonDisabled ? "#ccc" : "#fff6ea",
          color: buttonDisabled ? "#888" : "#3e1e00", 
          border: "4px solid #3e1e00",
          borderRadius: "12px",
          boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          cursor: buttonDisabled ? "not-allowed" : "pointer",
          pointerEvents: buttonDisabled ? "none" : "auto", 
          transition: "all 0.2s ease",
          fontFamily: "'Press Start 2P', monospace",
          zIndex: 3,
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#ffe5c4";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#fff6ea";
        }}
      >
        {buttonText}
      </button>
      <img
        src={currentImage}
        alt="fortune cat"
        style={{
            position: "absolute",
            left: "46%",
            bottom: "115px",
            transform: "translateX(-50%)",
            width: "20%",
            maxWidth: "60%",
            imageRendering: "pixelated",
        }}
      />
      {fortuneText && (
        <div
          style={{
            position: "absolute",
            bottom: "450px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#b5aebf",
            border: "2px solid #3e1e00",
            borderRadius: "12px",
            padding: "0.75rem 1rem",
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "0.9rem",
            color: "#3e1e00",
            maxWidth: "250px",
            wordWrap: "break-word",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            zIndex: 4,
          }}
        >
          {fortuneText}
        </div>
      )}

      <div
        onMouseEnter={() => setIsHoveringPotion1(true)}
        onMouseLeave={() => setIsHoveringPotion1(false)}
        style={{
          position: "absolute",
          right: "423px",
          top: "71px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: mode === "idle" ? "pointer" : "default",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "130px",
            height: "130px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="potion1.png"
            alt="purple potion"
            style={{
              width: "130px",
              left: "50%",
              top: "50%",
              transition: "transform 0.1s ease",
              transform: IsHoveringPotion1 && mode === "idle" ? "scale(1.1)" : "scale(1)",
              transformOrigin: "center",
              imageRendering: "pixelated",
            }}
          />
        </div>
        {IsHoveringPotion1 && mode === "idle" && (
            <div
            style={{
                position: "absolute",
                top: "114px",
                backgroundColor: "#fff8c9",
                border: "3px solid #6e361a",
                borderRadius: "4px",
                padding: "0.6rem 1rem",
                fontSize: "0.8rem",
                fontFamily: "'Quintessential', monospace",
                color: "#3e1e00",
                minWidth: "200px",
                textAlign: "center",
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            }}
            >
              This is my top-secret potion base... well, it’s just purple food coloring and glitter.
            </div>
        )}
      </div>

      <div
        onMouseEnter={() => setIsHoveringPotion2(true)}
        onMouseLeave={() => setIsHoveringPotion2(false)}
        style={{
          position: "absolute",
          right: "696px",
          top: "195px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: mode === "idle" ? "pointer" : "default",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "127px",
            height: "127px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="potion2.png"
            alt="dark potion"
            style={{
              width: "127px",
              left: "50%",
              top: "50%",
              transition: "transform 0.1s ease",
              transform: IsHoveringPotion2 && mode === "idle" ? "scale(1.1)" : "scale(1)",
              transformOrigin: "center",
              imageRendering: "pixelated",
            }}
          />
        </div>
        {IsHoveringPotion2 && mode === "idle" && (
            <div
            style={{
                position: "absolute",
                top: "40px",
                left: "100px",
                backgroundColor: "#fff8c9",
                border: "3px solid #6e361a",
                borderRadius: "4px",
                padding: "0.6rem 1rem",
                fontSize: "0.8rem",
                fontFamily: "'Quintessential', monospace",
                color: "#3e1e00",
                minWidth: "170px",
                textAlign: "center",
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            }}
            >
              Do not combine with moonlight or tax fraud. Trust.
            </div>
        )}
      </div>

      <div
        onMouseEnter={() => setIsHoveringBook1(true)}
        onMouseLeave={() => setIsHoveringBook1(false)}
        style={{
          position: "absolute",
          right: "227px",
          top: "185px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: mode === "idle" ? "pointer" : "default",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "124px",
            height: "124px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="book1.png"
            alt="green potion"
            style={{
              width: "124px",
              left: "50%",
              top: "50%",
              transition: "transform 0.1s ease",
              transform: IsHoveringBook1 && mode === "idle" ? "scale(1.09)" : "scale(1)",
              transformOrigin: "center",
              imageRendering: "pixelated",
            }}
          />
        </div>
        {IsHoveringBook1 && mode === "idle" && (
            <div
            style={{
                position: "absolute",
                top: "122px",
                backgroundColor: "#fff8c9",
                border: "3px solid #6e361a",
                borderRadius: "4px",
                padding: "0.6rem 1rem",
                fontSize: "0.8rem",
                fontFamily: "'Quintessential', monospace",
                color: "#3e1e00",
                minWidth: "170px",
                textAlign: "center",
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            }}
            >
              Chapter 1: How to Hex Your Ex.
            </div>
        )}
      </div>

      <div
        onMouseEnter={() => setIsHoveringJar1(true)}
        onMouseLeave={() => setIsHoveringJar1(false)}
        style={{
          position: "absolute",
          left: "292px",
          top: "190px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: mode === "idle" ? "pointer" : "default",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "126px",
            height: "126px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="jar1.png"
            alt="firefly jar"
            style={{
              width: "126px",
              left: "50%",
              top: "50%",
              transition: "transform 0.1s ease",
              transform: IsHoveringJar1 && mode === "idle" ? "scale(1.09)" : "scale(1)",
              transformOrigin: "center",
              imageRendering: "pixelated",
            }}
          />
        </div>
        {IsHoveringJar1 && mode === "idle" && (
            <div
            style={{
                position: "absolute",
                top: "118px",
                backgroundColor: "#fff8c9",
                border: "3px solid #6e361a",
                borderRadius: "4px",
                padding: "0.6rem 1rem",
                fontSize: "0.8rem",
                fontFamily: "'Quintessential', monospace",
                color: "#3e1e00",
                minWidth: "200px",
                textAlign: "center",
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            }}
            >
              "Very legal. Definitely mine." - sketchy firefly dealer
            </div>
        )}
      </div>

      <div
        onMouseEnter={() => setIsHoveringPotion3(true)}
        onMouseLeave={() => setIsHoveringPotion3(false)}
        style={{
          position: "absolute",
          right: "360px",
          top: "310px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: mode === "idle" ? "pointer" : "default",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "125px",
            height: "125px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="potion3.png"
            alt="green potion"
            style={{
              width: "125px",
              left: "50%",
              top: "50%",
              transition: "transform 0.1s ease",
              transform: IsHoveringPotion3 && mode === "idle" ? "scale(1.1)" : "scale(1)",
              transformOrigin: "center",
              imageRendering: "pixelated",
            }}
          />
        </div>
        {IsHoveringPotion3 && mode === "idle" && (
            <div
            style={{
                position: "absolute",
                top: "123px",
                backgroundColor: "#fff8c9",
                border: "3px solid #6e361a",
                borderRadius: "4px",
                padding: "0.6rem 1rem",
                fontSize: "0.8rem",
                fontFamily: "'Quintessential', monospace",
                color: "#3e1e00",
                minWidth: "170px",
                textAlign: "center",
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            }}
            >
              Tastes like sour apples and regret.
            </div>
        )}
      </div>

    </div>

  );
}
