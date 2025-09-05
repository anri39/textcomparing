import { useState } from "react";
import { diffWords } from "diff";
import type { Change } from "diff";
import "./InputBoxes.css";
import updownArrow from "../assets/arrow.svg";

export default function InputBoxes() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diffResult, setDiffResult] = useState<Change[] | null>(null);

  const handleCompare = () => {
    const diff = diffWords(text1, text2);
    setDiffResult(diff);
  };

  return (
    <div className="inputboxescontainer">
      <div className="textarea-wrapper">
        {diffResult ? (
          <div className="inputbox diff-view">
            {diffResult.map((part, i) => {
              let style: React.CSSProperties = {};
              if (part.removed) style = { backgroundColor: "salmon" };

              return (
                <span key={i} style={style}>
                  {part.value}
                </span>
              );
            })}
          </div>
        ) : (
          <textarea
            className="inputbox"
            placeholder="ჩაწერეთ პირველი ტექსტი აქ"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
          />
        )}

        <img src={updownArrow} alt="swap texts" className="swap-icon" />

        {diffResult ? (
          <div className="inputbox diff-view">
            {diffResult.map((part, i) => {
              let style: React.CSSProperties = {};
              if (part.added) style = { backgroundColor: "lightgreen" };

              return (
                <span key={i} style={style}>
                  {part.value}
                </span>
              );
            })}
          </div>
        ) : (
          <textarea
            className="inputbox"
            placeholder="ჩაწერეთ მეორე ტექსტი აქ"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          />
        )}
      </div>

      <button className="comparebtn" onClick={handleCompare}>
        შედარება
      </button>
    </div>
  );
}
