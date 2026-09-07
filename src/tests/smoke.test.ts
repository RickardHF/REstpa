import { describe, expect, it } from "vitest";
import { createGame } from "../game";
import { starterLevel } from "../levels";

describe("project scaffold", () => {
  it("creates the initial game and starter level", () => {
    expect(createGame()).toEqual({ state: "start" });
    expect(starterLevel.width).toBeGreaterThan(0);
  });
});
