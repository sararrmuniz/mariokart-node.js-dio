const player1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  nome: "Luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 3,
  pontos: 0,
};

const player3 = {
  nome: "Peach",
  velocidade: 3,
  manobrabilidade: 3,
  poder: 4,
  pontos: 0,
};

const player4 = {
  nome: "Yoshi",
  velocidade: 4,
  manobrabilidade: 2,
  poder: 4,
  pontos: 0,
};

module.exports = { player1, player2, player3, player4 };

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result = null;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

async function logRollResult(character, block, diceResult, attribute) {
  console.log(
    `${character} 🎲 rolou o dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`,
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    //sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco sorteado: ${block}`);

    //rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = character1.velocidade + diceResult1;
      totalTestSkill2 = character2.velocidade + diceResult2;

      await logRollResult(character1.nome, block, diceResult1, "velocidade");
      await logRollResult(character2.nome, block, diceResult2, "velocidade");

    } else if (block === "CURVA") {
      totalTestSkill1 = character1.manobrabilidade + diceResult1;
      totalTestSkill2 = character2.manobrabilidade + diceResult2;

      await logRollResult( character1.nome, block, diceResult1,"manobrabilidade");
      await logRollResult(character2.nome,block,diceResult2,"manobrabilidade");

    } else if (block === "CONFRONTO") {
      let powerResult1 = character1.poder + diceResult1;
      let powerResult2 = character2.poder + diceResult2;

      await logRollResult(character1.nome, block, diceResult1, "poder");
      await logRollResult(character2.nome, block, diceResult2, "poder");
    }
  }
}

(async function main() {
  console.log(
    `🏁🚨Corrida entre ${player1.nome} e ${player2.nome} começando...\n`,
  );
  await playRaceEngine(player1, player2);
})();
