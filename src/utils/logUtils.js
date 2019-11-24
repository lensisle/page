import { v4 } from "uuid";

export function createLog(logQueue, text) {
  const newQueue = [...logQueue];
  if (newQueue.length > 9) {
    newQueue.shift();
  }

  newQueue.push({
    id: v4(),
    text
  });

  return newQueue;
}
