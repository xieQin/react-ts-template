import { action, makeAutoObservable, observable } from "mobx";

export class MobxTimerStore {
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
