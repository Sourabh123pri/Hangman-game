import React, { useState, useEffect } from "react";
import animal_name from "../animal";
import step1 from "./img/1.png";
import step2 from "./img/2.png";
import step3 from "./img/3.png";
import step4 from "./img/4.png";
import step5 from "./img/5.png";
import step6 from "./img/6.png";
import step7 from "./img/7.png";

const Hangman = () => {
  const images = [step1, step2, step3, step4, step5, step6,step7];
  let [mistek, setMistak] = useState(0);
  const [word, setWord] = useState("");
  const [showAns, setShowAns] = useState(null);
  const [userTypeValue, setUserTypeValue] = useState("");

  const randomname = () => {
    setWord(
      animal_name[
        Math.round(Math.random() * animal_name.length)
      ].toLocaleLowerCase()
    );
    return;
  };

  const guessHandler = (e) => {
    if(mistek === 6) return alert('game lose press reset to play agian')
    if(showAns) return alert('you game win')
    "1234567890"
      .split("")
      .forEach((ele) =>
        ele === e.target.value ? alert("number is not allow") : null
      );
    if (!word.includes(e.target.value[e.target.value.length - 1])) {
      setMistak(++mistek);
    } else {
      setUserTypeValue(e.target.value);
      const ans = word.split("").every((ele) => e.target.value.includes(ele));
      setShowAns(ans);
    }
    console.log(word);
  };

  const resetBtn = () => {
    setMistak(0);
    randomname();
    setShowAns(null);
    setUserTypeValue("");
  };

  useEffect(() => {
    randomname();
  }, []);

  return (
    <>
      <h1 className="text-center">Hangman</h1>
      <div className="gamecontiner d-flex justify-content-around align-items-center">
        <div className="hangmanimg">
          <img src={images[mistek]} alt="hangman" />
        </div>
        <div className="info">
        <div className="intrection text-center">
            <h4> Guessed Left : {mistek}/6</h4>
            <h3> Guess the Animal Word  </h3>
           
          </div>
        </div>
      </div>
      <div className="text-center">
      <input type="text" value={userTypeValue} onChange={guessHandler} />
            <h2>{showAns ?
            <div> <samp className="ans">{word}   Won  .  <br />  Press Reset to play again 😎🎉🎉</samp> </div> : ""}
             </h2>
            <h4>
              {mistek === 6
                ? <div> <samp className="ans">{word}</samp>  <br /> <span className="text-danger"> Game Over .</span> Press Reset to play again 😒 </div>
                : ""}
            </h4>
      </div>
      
      <hr />
      <div className="text-center">
        <button
          className="btn btn-outline-warning "
          onClick={() => {
            resetBtn();
          }}
        >
          Restart
        </button>
      </div>
    </>
  );
};

export default Hangman;
