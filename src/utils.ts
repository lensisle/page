import { v4 } from "uuid";
import { Log, StepName } from "./data";

const MAX_LOGS_COUNT = 6;

export function createLog(logQueue: Array<Log>, text: string): Array<Log> {
  const newQueue = [...logQueue];
  if (newQueue.length > MAX_LOGS_COUNT) {
    newQueue.pop();
  }

  newQueue.unshift({
    id: v4(),
    text
  });

  return newQueue;
}

export function tryPreventRender(
  currentStep: StepName,
  preventedSteps: Array<StepName>
): boolean {
  return preventedSteps.includes(currentStep);
}
