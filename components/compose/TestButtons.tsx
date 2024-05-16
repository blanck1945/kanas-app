import React from "react";
import { useRouter } from "next/navigation";
import useKanas from "@/store/kana.store";
import { Step } from "@/types";

const TestButtons = () => {
  const router = useRouter();
  const { firstTest, setResult, setTestStep } = useKanas();

  const handleTestSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    let correct = 0;
    let incorrect = 0;

    firstTest.forEach((el) => {
      if (el.romaji === el.answer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    setResult(correct, incorrect);

    router.push("/result");
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => router.push("/")}
        className="btn btn-warning text-white"
      >
        Volver
      </button>
      <button onClick={handleTestSubmit} className="btn btn-success text-white">
        Entregar
      </button>
    </div>
  );
};

export default TestButtons;
