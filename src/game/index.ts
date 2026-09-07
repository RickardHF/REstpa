export type GameState = "start" | "playing" | "paused" | "game-over" | "complete";

export interface Game {
  state: GameState;
}

export function createGame(): Game {
  return { state: "start" };
}

