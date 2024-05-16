"use client";

import TestButtons from "@/components/compose/TestButtons";
import useKanas from "@/store/kana.store";

export default function Test() {
  const { testType, firstTest } = useKanas();

  return (
    <main className="flex min-h-screen flex-col items-center  justify-between p-24 py-12">
      <div className="card lg:card-side bg-base-100 shadow-xl w-3/4">
        <div className="card-body flex-col gap-8">
          <div className="grid grid-cols-5 gap-5 mx-8">
            {firstTest.map((el, index) => (
              <label
                key={index}
                className="form-control w-full max-w-xs flex items-center justify-center"
              >
                <div className="label">
                  <span className="label-text text-2xl text-center">
                    {el.romaji}
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-xs"
                />
              </label>
            ))}
          </div>
          <TestButtons />
        </div>
      </div>
    </main>
  );
}
