"use client";
import useKanas from "@/store/kana.store";
import React from "react";
import { useRouter } from "next/navigation";

const Result = () => {
  const router = useRouter();
  const { firstTest, result, testStep, testRoute, setTestStep, setDefault } =
    useKanas();

  const handleContinue = () => {
    setTestStep();
    router.push(testRoute);
  };

  const handleFinish = () => {
    setDefault();
    router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center  justify-between p-24 py-12">
      <div className="card lg:card-side bg-base-100 shadow-xl w-3/4">
        <div className="card-body flex-col gap-6">
          <h2 className="w-full flex items-end justify-end text-xl">
            Resultados
          </h2>
          <div className="border"></div>
          <div className="grid grid-cols-5 gap-5 mx-8">
            {firstTest.map((el, index) => (
              <div key={index}>
                <p>Question: {el.kana}</p>
                <p>Answer: {el.answer}</p>
                <p
                  className={`${
                    el.romaji === el.answer ? "bg-green-500" : "bg-red-500"
                  } text-white`}
                >
                  {el.romaji === el.answer ? "Correcto" : "Incorrecto"}
                </p>
              </div>
            ))}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="flex flex-col gap-3 items-center justify-between w-1/2 bg-slate-100 p-6 rounded-md">
        <div className="font-semibold text-xl flex items-center gap-2">
          <p className="bg-green-500 p-2 rounded-md text-white">
            Correctas: {result.correct}
          </p>
          <p className="bg-red-500 p-2 rounded-md text-white">
            Incorrectas: {result.incorrect}
          </p>
        </div>
        {testStep === 3 ? (
          <button onClick={handleFinish} className="btn btn-primary">
            Volver a la pantalla de inicio
          </button>
        ) : (
          <button onClick={handleContinue} className="btn btn-primary">
            Continuar al siguiente paso
          </button>
        )}
      </div>
    </main>
  );
};

export default Result;
