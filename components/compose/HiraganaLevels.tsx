import React, { FC } from "react";

interface HiraganaLevelsProps {
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

const HiraganaLevels: FC<HiraganaLevelsProps> = ({ setLevel }) => {
  return (
    <div>
      <label htmlFor="">Seleccionar nivel</label>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">1 - あ い う え お</span>
          <input
            type="radio"
            name="level"
            onChange={() => setLevel(1)}
            defaultChecked
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">2 - か き く け こ</span>
          <input
            type="radio"
            name="level"
            onChange={() => setLevel(2)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">3 - さ し す せ そ</span>
          <input
            type="radio"
            name="level"
            onChange={() => setLevel(3)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">4 - た ち つ て と</span>
          <input
            type="radio"
            name="level"
            onChange={() => setLevel(4)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">5 - な に ぬ ね の</span>
          <input
            type="radio"
            name="level"
            onChange={() => setLevel(5)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">6 - は ひ ふ へ ほ</span>

          <input
            type="radio"
            name="level"
            onChange={() => setLevel(6)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">7 - ま み む め も</span>

          <input
            type="radio"
            name="level"
            onChange={() => setLevel(7)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">8 - や ゆ よ</span>
          <input
            type="radio"
            name="level"
            onChange={() => setLevel(8)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">9 - ら り る れ ろ</span>
          <input
            type="radio"
            name="level"
            onChange={() => setLevel(9)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">10 - わ を ん</span>
          <input
            type="radio"
            name="level"
            onChange={() => setLevel(9)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
    </div>
  );
};

export default HiraganaLevels;
