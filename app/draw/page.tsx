"use client";

import TestButtons from "@/components/compose/TestButtons";
import useKanas from "@/store/kana.store";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Test() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const { testType, test } = useKanas();
  const router = useRouter();

  //   useEffect(() => {
  //     const canvas = canvasRef.current;

  //     if (!canvas) return;
  //     const context = canvas.getContext("2d");
  //     // Function to draw a circle where the user clicks
  //     const draw = (event) => {
  //       const rect = canvas.getBoundingClientRect();
  //       const x = event.clientX - rect.left;
  //       const y = event.clientY - rect.top;

  //       context.beginPath();
  //       context.arc(x, y, 10, 0, 2 * Math.PI);
  //       context.fillRect(x, y, 10, 10);
  //       context.fillStyle = "green";
  //       //context.fill();
  //     };

  //     // Add the event listener
  //     canvas.addEventListener("mousedown", draw);

  //     // Clean up function
  //     return () => {
  //       canvas.removeEventListener("mousedown", draw);
  //     };
  //   }, []);

  const draw = (event) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // context.beginPath();
    // context.arc(x, y, 10, 0, 2 * Math.PI);
    console.warn(x, y);
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 7, 7);
  };

  const drawInit = (event) => {
    setDrawing(true);
    draw(event);
  };

  const drawEnd = (event) => {
    setDrawing(false);
    draw(event);
  };

  return (
    <main className="flex min-h-screen flex-col items-center  justify-between p-24 py-12">
      {testType === "drawing" && (
        <div>
          <canvas
            ref={canvasRef}
            className="border bg-teal-500"
            onMouseDown={drawInit}
            onMouseMove={draw}
            onMouseUp={drawEnd}
          ></canvas>
        </div>
      )}
      <div className="card lg:card-side bg-base-100 shadow-xl w-3/4">
        <div className="card-body flex-col gap-8">
          <div className="grid grid-cols-5 gap-5 mx-8">
            {test.map((el, index) => (
              <label
                key={index}
                className="form-control w-full max-w-xs flex items-center justify-center"
              >
                <div className="label">
                  <span className="label-text text-2xl text-center">
                    {testType === "sign" ? el.romaji : el.kana}
                  </span>
                </div>
                {testType === "drawing" ? (
                  //   <canvas
                  //     width="100"
                  //     height="100"
                  //     className="border border-base-200"
                  //     ref={canvasRef}
                  //   ></canvas>
                  <p>draw</p>
                ) : (
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                )}
              </label>
            ))}
          </div>
          <TestButtons />
        </div>
      </div>
    </main>
  );
}
