import React, { FC } from "react";

interface KatakanaLevelsProps {
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

const KatakanaLevels: FC<KatakanaLevelsProps> = ({ setLevel }) => {
  return (
    <div>
      <label htmlFor="">Seleccionar nivel</label>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">1 - ア イ ウ エ オ</span>
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
          <span className="label-text">2 - カ キ ク ケ コ</span>
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
          <span className="label-text">3 - サ シ ス セ ソ</span>
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
          <span className="label-text">4 - タ チ ツ テ ト</span>
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
          <span className="label-text">5 - ナ ニ ヌ ネ ノ</span>
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
          <span className="label-text">6 - ハ ヒ フ ヘ ホ</span>
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
          <span className="label-text">7 - マ ミ ム メ モ</span>
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
          <span className="label-text">8 - ヤ ユ ヨ</span>
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
          <span className="label-text">9 - ラ リ ル レ ロ</span>
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
          <span className="label-text">10 - ワ ヲ ン</span>
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

export default KatakanaLevels;
