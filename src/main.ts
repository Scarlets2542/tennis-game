const tennisScoreText = (score: number) => {
  switch (score) {
    case 0:
      return "Love";
    case 1:
      return "Fifteen";
    case 2:
      return "Thirty";
    case 3:
      return "Forty";
    default:
      return "Deuce";
  }
};

export const tennisGame = (player1: number, player2: number) => {
  const scoreDiff = player1 - player2;
  let result = "";

  if (player1 >= 4 || player2 >= 4) {
    if (Math.abs(scoreDiff) >= 2) {
      result = `Won for player${scoreDiff > 0 ? 1 : 2}`;
    } else if (scoreDiff === 1) {
      result = `Advantage for player1`;
    } else if (scoreDiff === -1) {
      result = `Advantage for player2`;
    } else {
      result = "Deuce";
    }
  } else if (player1 >= 3 && player2 >= 3) {
    result = "Deuce";
  } else {
    result = `${tennisScoreText(player1)}-${tennisScoreText(player2)}`;
  }
  console.log("🚀 ~ file: main.ts:35 ~ tennisGame ~ result", result);

  return result;
};

tennisGame(2, 3);
