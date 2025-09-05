import "./InputBoxes.css";
import updownArrow from "../assets/arrow.svg";
import { diffWords } from "diff";
import type { Change } from "diff";
import { useState } from "react";

export default function InputBoxes() {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [diffResult, setDiffResult] = useState<Change[]>([]);

  const handleDiff = () => {
    const diff = diffWords(firstText, secondText);
    setDiffResult(diff);
  };

  return (
    <div className="inputboxescontainer">
      <div className="textarea-wrapper">
        <textarea
          className="inputbox"
          placeholder="ჩაწერეთ პირველი ტექსტი აქ"
          value={firstText}
          onChange={(e) => {
            setFirstText(e.target.value);
          }}
        />
        <img src={updownArrow} alt="swap texts" className="swap-icon" />
        <textarea
          className="inputbox"
          placeholder="ჩაწერეთ მეორე ტექსტი აქ"
          value={secondText}
          onChange={(e) => {
            setSecondText(e.target.value);
          }}
        />

        <div className="diff-output">
          {diffResult.map((part, index) => {
            let style: React.CSSProperties = {};
            if (part.added) style = { backgroundColor: "#3ebc5e" };
            else if (part.removed) style = { backgroundColor: "salmon" };
            return (
              <span key={index} style={style}>
                {part.value}
              </span>
            );
          })}
        </div>
      </div>
      <button className="comparebtn" onClick={handleDiff}>
        შედარება
      </button>
    </div>
  );
}
