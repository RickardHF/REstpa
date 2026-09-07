import { createGame } from "./game";
import { inputActions } from "./input";
import { starterLevel } from "./levels";
import { renderCanvas } from "./render";

const canvas = document.querySelector<HTMLCanvasElement>("#game");

if (!canvas) {
  throw new Error("The game canvas was not found.");
}

const game = createGame();
void inputActions;
void starterLevel;
void game;
renderCanvas(canvas);

