import { v4 } from "uuid";

const MAX_LOGS_COUNT = 6;

export function createLog(logQueue, text) {
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
