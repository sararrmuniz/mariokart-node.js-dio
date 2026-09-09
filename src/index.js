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

async function main() {
    
}