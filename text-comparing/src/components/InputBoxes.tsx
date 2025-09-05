import { useState, useEffect } from "react";
import { diffWords } from "diff";
import type { Change } from "diff";
import "./InputBoxes.css";
import updownArrow from "../assets/arrow.svg";
import LoadingComponent from "./LoadingComponent";
import { RotateCcw } from "lucide-react";

interface InputBoxesProps {
  onComparisonDone: () => void;
}

export default function InputBoxes({ onComparisonDone }: InputBoxesProps) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diffResult, setDiffResult] = useState<Change[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCompare = () => {
    if (diffResult) {
      setDiffResult(null);
    } else {
      setIsLoading(true);
    }
  };

  const handleLoadingComplete = () => {
    const diff = diffWords(text1, text2);
    setDiffResult(diff);
    setIsLoading(false);
    onComparisonDone();
  };

  const handleExternalReset = () => {
    setText1("");
    setText2("");
    setDiffResult(null);
  };

  useEffect(() => {
    (window as any).resetInputBoxes = handleExternalReset;
  }, []);

  return (
    <div className="inputboxescontainer">
      <div className="textarea-wrapper">
        {diffResult ? (
          <div className="inputbox diff-view">
            {diffResult.map((part, i) => {
              let style: React.CSSProperties = {};
              if (part.removed) {
                style = {
                  backgroundColor: "#ffebee",
                  color: "#c62828",
                };
              } else if (part.added) {
                style = {
                  backgroundColor: "#e8f5e8",
                  color: "#2e7d32",
                  fontWeight: "bold",
                };
              }

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
              if (part.added) {
                style = {
                  backgroundColor: "#e8f5e8",
                  color: "#2e7d32",
                  fontWeight: "bold",
                };
              }

              if (part.removed) return null;

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

      <button
        className="comparebtn"
        onClick={handleCompare}
        disabled={!diffResult && (!text1.trim() || !text2.trim())}
      >
        {diffResult ? (
          <>
            <RotateCcw size={18} />
            შედარება
          </>
        ) : (
          "შედარება"
        )}
      </button>

      <LoadingComponent
        isVisible={isLoading}
        onComplete={handleLoadingComplete}
      />
    </div>
  );
}
