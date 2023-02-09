import { tennisGame } from "./main";

describe("tennisGame", () => {
  it("should return correct score for love-love", () => {
    expect(tennisGame(0, 0)).toBe("Love-Love");
  });

  it("should return correct score for fifteen-love", () => {
    expect(tennisGame(1, 0)).toBe("Fifteen-Love");
  });

  it("should return correct score for thirty-thirty", () => {
    expect(tennisGame(2, 2)).toBe("Thirty-Thirty");
  });

  it("should return correct score for fifteen-forty", () => {
    expect(tennisGame(1, 3)).toBe("Fifteen-Forty");
  });

  it("should return correct score for WON", () => {
    expect(tennisGame(4, 2)).toBe("Won for player1");
  });

  it("should return correct score for WON ", () => {
    expect(tennisGame(4, 6)).toBe("Won for player2");
  });

  it("should return correct score for Deuce", () => {
    expect(tennisGame(3, 3)).toBe("Deuce");
  });

  it("should return correct score for Deuce", () => {
    expect(tennisGame(5, 5)).toBe("Deuce");
  });

  it("should return correct score for Advantage", () => {
    expect(tennisGame(4, 5)).toBe("Advantage for player2");
  });

  it("should return correct score for Advantage", () => {
    expect(tennisGame(7, 6)).toBe("Advantage for player1");
  });
});
