import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

import { useInterval } from "@/hooks";

export class TimerStore {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

export const TimerView = observer(({ timer }: { timer: TimerStore }) => (
  <span>Seconds passed: {timer.secondsPassed}</span>
));

export const TimerPage = () => {
  const myTimer = new TimerStore();
  useInterval(() => {
    myTimer.increaseTimer();
  }, 1000);

  return <TimerView timer={myTimer} />;
};
