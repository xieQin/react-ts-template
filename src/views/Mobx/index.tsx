import { observer } from "mobx-react";

import { useInterval } from "@/hooks";

import { MobxTimerStore } from "./store";

export const MobxTimerView = observer(
  ({ timer }: { timer: MobxTimerStore }) => (
    <>
      <span>Seconds passed: {timer.secondsPassed}</span>
      <span>{timer.current}</span>
      <button
        onClick={() => {
          timer.setCurrent(timer.current + 1);
        }}
      >
        Add current
      </button>
    </>
  )
);

export const MobxTimerPage = () => {
  const myTimer = new MobxTimerStore();
  useInterval(() => {
    myTimer.increaseTimer();
  }, 1000);

  return <MobxTimerView timer={myTimer} />;
};
