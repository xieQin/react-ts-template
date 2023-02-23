import { action, makeAutoObservable, observable } from "mobx";
import { observer } from "mobx-react";

import { useInterval } from "@/hooks";

export class TimerStore {
  secondsPassed = 0;
  @observable current = 0;

  @action setCurrent(v: number) {
    this.current = v;
  }

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

export const TimerView = observer(({ timer }: { timer: TimerStore }) => (
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
));

export const TimerPage = () => {
  const myTimer = new TimerStore();
  useInterval(() => {
    myTimer.increaseTimer();
  }, 1000);

  return <TimerView timer={myTimer} />;
};
