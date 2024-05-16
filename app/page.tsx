"use client";
import HiraganaLevels from "@/components/compose/HiraganaLevels";
import KatakanaLevels from "@/components/compose/KatakanaLevels";
import useKanas from "@/store/kana.store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const { setTest } = useKanas();
  const router = useRouter();
  const [alphabet, setAlphabet] = useState<"hiragana" | "katakana">("hiragana");
  const [testType, setTestType] = useState<"letter" | "sign" | "drawing">(
    "letter"
  );
  const [level, setLevel] = useState<number>(1);
  const [rows, setRows] = useState<number>(2);

  const routes = {
    letter: "/letter",
    sign: "/symbol",
    drawing: "/draw",
  };

  // Form event
  const submitTest = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const route = routes[testType];

    setTest({
      alphabet,
      testType,
      rows,
      level,
      route,
    });

    router.push(route);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-1/2">
      <form onSubmit={submitTest} className="card-body flex-col">
        <div>
          <div className="form-control">
            <label className="label cursor-pointer gap-2">
              <span className="label-text">Hiragana</span>
              <input
                type="radio"
                name="alphabet"
                onChange={() => setAlphabet("hiragana")}
                defaultChecked
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-2">
              <span className="label-text">Katakana</span>
              <input
                type="radio"
                name="alphabet"
                onChange={() => setAlphabet("katakana")}
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
        </div>
        <div className="border my-2"></div>
        <div>
          <div className="form-control">
            <label className="label cursor-pointer flex gap-2">
              <span className="label-text">Letra</span>
              <input
                type="radio"
                name="testType"
                onChange={() => setTestType("letter")}
                className="checkbox checkbox-primary"
                defaultChecked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer flex gap-2">
              <span className="label-text">Signo</span>
              <input
                type="radio"
                name="testType"
                onChange={() => setTestType("sign")}
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer flex gap-2">
              <span className="label-text">Dibujo</span>
              <input
                type="radio"
                name="testType"
                onChange={() => setTestType("drawing")}
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
        </div>
        <div className="border my-2"></div>
        {alphabet === "hiragana" ? (
          <HiraganaLevels setLevel={setLevel} />
        ) : (
          <KatakanaLevels setLevel={setLevel} />
        )}
        {/* <div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Cantidad de filar</label>
              <input
                type="number"
                placeholder="Filas"
                max={15}
                min={1}
                onChange={(e) => {
                  setRows(parseInt(e.target.value, 10));
                }}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
          </div> */}
        {/* <div className="border my-2"></div> */}
        <button className="btn btn-outline btn-primary">Iniciar</button>
      </form>
    </div>
  );
}
