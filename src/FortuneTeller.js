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
  const [IsHoveringCandle1, setIsHoveringCandle1] = useState(false);
  const [IsHoveringReadingCat1, setIsHoveringReadingCat1] = useState(false);

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

      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "5%",
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "left center",
          fontFamily: "'Amarante', monospace",
          fontSize: "clamp(15px, 1.5vw, 20px)",
          lineHeight: 1,
          color: "#f2d5c7",
          letterSpacing: "2px",
          zIndex: 10,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily: "'Aladin', monospace",
            fontSize: "5rem", 
            marginRight: "3%",                         
          }}
        >
          Furtunes
        </span>{" "}
        by Madam Beans
      </div>

      <img
        src="stars1.png"
        alt="stars"
        style={{
            position: "absolute",
            left: "93.5%",
            top: "4%",
            transform: "translateX(-50%)",
            width: "3%",
            maxWidth: "60%",
            imageRendering: "pixelated",
            zIndex: 9,
        }}
      />

      <img
        src="moon1.png"
        alt="moon"
        style={{
            position: "absolute",
            left: "97.5%",
            top: "14%",
            transform: "translateX(-50%)",
            width: "2%",
            maxWidth: "60%",
            imageRendering: "pixelated",
            zIndex: 9,
        }}
      />

      <img
        src="hat1.png"
        alt="witch's hat"
        style={{
            position: "absolute",
            left: "93%",
            top: "20%",
            transform: "translateX(-50%)",
            width: "3%",
            maxWidth: "60%",
            imageRendering: "pixelated",
            zIndex: 9,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "1%",
          transform: "translateY(-50%)",
          fontFamily: "'Amarante', monospace",
          fontSize: "clamp(10px, 0.9vw, 14px)",
          color: "#f2d5c7",
          textAlign: "center",
          opacity: 0.8,
          maxWidth: "15ch",
          whiteSpace: "normal",
          zIndex: 9,
        }}
      >
        Explore the room... if you dare
      </div>

      <img
        src="planchette1.png"
        alt="planchette"
        style={{
            position: "absolute",
            left: "95%",
            top: "72%",
            transform: "translateX(-50%)",
            width: "2%",
            maxWidth: "60%",
            imageRendering: "pixelated",
            zIndex: 9,
        }}
      />

      <img
        src="apple1.png"
        alt="poison apple"
        style={{
            position: "absolute",
            left: "92.5%",
            top: "83%",
            transform: "translateX(-50%)",
            width: "2%",
            maxWidth: "60%",
            imageRendering: "pixelated",
            zIndex: 9,
        }}
      />

      <img
        src="stars2.png"
        alt="stars"
        style={{
            position: "absolute",
            left: "97.5%",
            top: "89%",
            transform: "translateX(-50%)",
            width: "2%",
            maxWidth: "60%",
            imageRendering: "pixelated",
            zIndex: 9,
        }}
      />

      <button
        onClick={handleClick}
        disabled={buttonDisabled}
        style={{
          position: "absolute",
          left: "50%",
          top: "min(10vh, 80px)",
          transform: "translateX(-50%)",
          fontSize: "clamp(14px, 1.6vw, 18px)",
          padding: "clamp(8px, 1.1vw, 14px) clamp(12px, 2vw, 22px)",
          backgroundColor: buttonDisabled ? "#ccc" : "#fff6ea",
          color: buttonDisabled ? "#888" : "#3e1e00",
          border: "max(2px, 0.35vw) solid #3e1e00",
          borderRadius: "clamp(8px, 1vw, 14px)",
          boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          cursor: buttonDisabled ? "not-allowed" : "pointer",
          transition: "transform .15s ease, background-color .15s ease",
          fontFamily: "'Press Start 2P', monospace",
          zIndex: 5,
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
            bottom: "15.5%",
            transform: "translateX(-50%)",
            width: "20%",
            maxWidth: "60%",
            imageRendering: "pixelated",
            zIndex: 3,
        }}
      />

      {fortuneText && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "calc(min(10vh, 80px) + 100px)",
            transform: "translateX(-50%)",
            maxWidth: "min(25ch, 70%)",
            backgroundColor: "#b5aebf",
            border: "2px solid #3e1e00",
            borderRadius: "12px",
            padding: "0.75rem 1rem",
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "clamp(10px, 1vw, 14px)", 
            color: "#3e1e00",
            textAlign: "center",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            zIndex: 4,
            wordWrap: "break-word",       // ensures long words break instead of overflowing
            wordBreak: "break-word",      // extra safety
            whiteSpace: "normal", 
          }}
        >
          {fortuneText}
        </div>
      )}

      <div
        style={{
            position: "absolute",
            left: "69.6%",          
            top: "17.5%",             
            transform: "translate(-50%, -50%)",
            width: "2.9%",
            zIndex: 2,
        }}
        onMouseEnter={() => setIsHoveringPotion1(true)}
        onMouseLeave={() => setIsHoveringPotion1(false)}
      >

        <img
            src="potion1.png"
            alt="purple potion"
            style={{
            width: "100%",
            height: "auto",
            display: "block",
            imageRendering: "pixelated",
            transition: "transform 0.1s ease",
            transform: IsHoveringPotion1 && mode === "idle" ? "scale(1.1)" : "scale(1)",
            transformOrigin: "center",
            }}
        />

        {IsHoveringPotion1 && mode === "idle" && (
          <div
            style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "8px",
            backgroundColor: "#fff8c9",
            border: "3px solid #6e361a",
            borderRadius: "4px",
            padding: "0.6rem 1rem",
            fontSize: "0.8rem",
            fontFamily: "'Quintessential', monospace",
            color: "#3e1e00",
            minWidth: "clamp(18ch, 24ch, 30ch)",
            textAlign: "center",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            whiteSpace: "normal",
            }}
          >
            Top-secret healing serum (tequila and food coloring).
          </div>
        )}
      </div>

      <div
        style={{
            position: "absolute",
            left: "52.6%",          
            top: "34.5%",             
            transform: "translate(-50%, -50%)",
            width: "3.1%",
            zIndex: 2,
        }}
        onMouseEnter={() => setIsHoveringPotion2(true)}
        onMouseLeave={() => setIsHoveringPotion2(false)}
      >

        <img
            src="potion2.png"
            alt="blue potion"
            style={{
            width: "100%",
            height: "auto",
            display: "block",
            imageRendering: "pixelated",
            transition: "transform 0.1s ease",
            transform: IsHoveringPotion2 && mode === "idle" ? "scale(1.1)" : "scale(1)",
            transformOrigin: "center",
            }}
        />

        {IsHoveringPotion2 && mode === "idle" && (
          <div
            style={{
            position: "absolute",
            top: "50%",
            left: "100%",
            transform: "translateY(-50%)",
            marginLeft: "8px",
            backgroundColor: "#fff8c9",
            border: "3px solid #6e361a",
            borderRadius: "4px",
            padding: "0.6rem 1rem",
            fontSize: "0.8rem",
            fontFamily: "'Quintessential', monospace",
            color: "#3e1e00",
            minWidth: "clamp(18ch, 24ch, 30ch)",
            textAlign: "center",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            whiteSpace: "normal",
            }}
          >
            Tastes like sour apples and regret.
          </div>
        )}
        
      </div>

      <div
        style={{
            position: "absolute",
            left: "73.8%",          
            top: "50.2%",             
            transform: "translate(-50%, -50%)",
            width: "3.7%",
            zIndex: 2,
        }}
        onMouseEnter={() => setIsHoveringPotion3(true)}
        onMouseLeave={() => setIsHoveringPotion3(false)}
      >

        <img
            src="potion3.png"
            alt="green potion"
            style={{
            width: "100%",
            height: "auto",
            display: "block",
            imageRendering: "pixelated",
            transition: "transform 0.1s ease",
            transform: IsHoveringPotion3 && mode === "idle" ? "scale(1.1)" : "scale(1)",
            transformOrigin: "center",
            }}
        />

        {IsHoveringPotion3 && mode === "idle" && (
           <div
            style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "10px",
            backgroundColor: "#fff8c9",
            border: "3px solid #6e361a",
            borderRadius: "4px",
            padding: "0.6rem 1rem",
            fontSize: "0.8rem",
            fontFamily: "'Quintessential', monospace",
            color: "#3e1e00",
            minWidth: "clamp(18ch, 24ch, 30ch)",
            textAlign: "center",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            whiteSpace: "normal",
            }}
          >
            Do not combine with moonlight or tax fraud. Trust.
          </div>
        )}
      </div>

      <div
        style={{
            position: "absolute",
            left: "22.2%",          
            top: "33.8%",             
            transform: "translate(-50%, -50%)",
            width: "3.8%",
            zIndex: 2,
        }}
        onMouseEnter={() => setIsHoveringJar1(true)}
        onMouseLeave={() => setIsHoveringJar1(false)}
      >

        <img
            src="jar1.png"
            alt="firefly jar"
            style={{
            width: "100%",
            height: "auto",
            display: "block",
            imageRendering: "pixelated",
            transition: "transform 0.1s ease",
            transform: IsHoveringJar1 && mode === "idle" ? "scale(1.1)" : "scale(1)",
            transformOrigin: "center",
            }}
        />

        {IsHoveringJar1 && mode === "idle" && (
          <div
            style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "8px",
            backgroundColor: "#fff8c9",
            border: "3px solid #6e361a",
            borderRadius: "4px",
            padding: "0.6rem 1rem",
            fontSize: "0.8rem",
            fontFamily: "'Quintessential', monospace",
            color: "#3e1e00",
            minWidth: "clamp(18ch, 24ch, 30ch)",
            textAlign: "center",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            whiteSpace: "normal",
            }}
          >
            "Very legal. Definitely mine." - sketchy firefly dealer
          </div>
        )}
      </div>

      <div
        style={{
            position: "absolute",
            left: "82%",          
            top: "33.4%",             
            transform: "translate(-50%, -50%)",
            width: "2.1%",
            zIndex: 2,
        }}
        onMouseEnter={() => setIsHoveringBook1(true)}
        onMouseLeave={() => setIsHoveringBook1(false)}
      >

        <img
            src="book1.png"
            alt="orange book"
            style={{
            width: "100%",
            height: "auto",
            display: "block",
            imageRendering: "pixelated",
            transition: "transform 0.1s ease",
            transform: IsHoveringBook1 && mode === "idle" ? "scale(1.1)" : "scale(1)",
            transformOrigin: "center",
            }}
        />

        {IsHoveringBook1 && mode === "idle" && (
          <div
            style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "10px",
            backgroundColor: "#fff8c9",
            border: "3px solid #6e361a",
            borderRadius: "4px",
            padding: "0.6rem 1rem",
            fontSize: "0.8rem",
            fontFamily: "'Quintessential', monospace",
            color: "#3e1e00",
            minWidth: "clamp(18ch, 24ch, 30ch)",
            textAlign: "center",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            whiteSpace: "normal",
            }}
          >
            Chapter 1: How to Hex Your Ex.
          </div>
        )}
      </div>

      <div
        style={{
            position: "absolute",
            left: "12.5%",          
            top: "16.4%",             
            transform: "translate(-50%, -50%)",
            width: "2.95%",
            zIndex: 2,
        }}
        onMouseEnter={() => setIsHoveringCandle1(true)}
        onMouseLeave={() => setIsHoveringCandle1(false)}
      >

        <img
            src="candle1.png"
            alt="candle on wall"
            style={{
            width: "100%",
            height: "auto",
            display: "block",
            imageRendering: "pixelated",
            transition: "transform 0.1s ease",
            transform: IsHoveringCandle1 && mode === "idle" ? "scale(1.1)" : "scale(1)",
            transformOrigin: "center",
            }}
        />

        {IsHoveringCandle1 && mode === "idle" && (
          <div
            style={{
            position: "absolute",
            top: "50%",
            left: "100%",
            transform: "translateY(-50%)",
            marginLeft: "8px",
            backgroundColor: "#fff8c9",
            border: "3px solid #6e361a",
            borderRadius: "4px",
            padding: "0.6rem 1rem",
            fontSize: "0.8rem",
            fontFamily: "'Quintessential', monospace",
            color: "#3e1e00",
            minWidth: "clamp(18ch, 20ch, 24ch)",
            textAlign: "center",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            whiteSpace: "normal",
            }}
          >
            Smells like ‘I can fix him.’
          </div>
        )}
      </div>

      <div
        style={{
            position: "absolute",
            left: "18.5%",          
            top: "70.5%",             
            transform: "translate(-50%, -50%)",
            width: "11%",
            zIndex: 2,
        }}
        onMouseEnter={() => setIsHoveringReadingCat1(true)}
        onMouseLeave={() => setIsHoveringReadingCat1(false)}
      >

        <img
            src="readingcat1.png"
            alt="black cat reading a book"
            style={{
            width: "100%",
            height: "auto",
            display: "block",
            imageRendering: "pixelated",
            transition: "transform 0.1s ease",
            transform: IsHoveringReadingCat1 && mode === "idle" ? "scale(1.1)" : "scale(1)",
            transformOrigin: "center",
            }}
        />

        {IsHoveringReadingCat1 && mode === "idle" && (
          <div
            style={{
            position: "absolute",
            top: "10%",
            left: "75%",
            transform: "translateY(-50%)",
            marginLeft: "8px",
            backgroundColor: "#fff8c9",
            border: "3px solid #6e361a",
            borderRadius: "4px",
            padding: "0.6rem 1rem",
            fontSize: "0.8rem",
            fontFamily: "'Quintessential', monospace",
            color: "#3e1e00",
            minWidth: "clamp(18ch, 20ch, 24ch)",
            textAlign: "center",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            whiteSpace: "normal",
            }}
          >
            Learning to sit on keyboards more efficiently.
          </div>
        )}
      </div>

    </div>

  );
}
