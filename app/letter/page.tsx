"use client";

import TestButtons from "@/components/compose/TestButtons";
import useKanas from "@/store/kana.store";

export default function Test() {
  const { firstTest, secondTest, thirdTest, testStep } = useKanas();

  const test =
    testStep === 1 ? firstTest : testStep === 2 ? secondTest : thirdTest;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4">
      <div className="card-body flex-col gap-6">
        <h2 className="w-full flex items-end justify-end text-xl">
          Ejercicio {testStep}/3
        </h2>
        <div className="border"></div>
        <div className="grid grid-cols-5 gap-5 mx-8">
          {test.map((el, index) => (
            <label
              key={index}
              className="form-control w-full max-w-xs flex items-center justify-center"
            >
              <div className="label">
                <span className="label-text text-2xl text-center">
                  {el.kana}
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
                onChange={(e) => {
                  el.answer = e.target.value;
                }}
              />
            </label>
          ))}
        </div>
        <TestButtons />
      </div>
    </div>
  );
}
