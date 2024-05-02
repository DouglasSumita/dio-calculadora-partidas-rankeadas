function calculaSaldoVitorias(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  return saldoVitorias;
}

function classificaNivelHeroi(saldoVitorias) {

/* Retirado das instruções para entrega, acredito que o nível de ferro deveria ser Menor ou IGUAL a 10 seguindo os parametros abaixo:

* Se vitórias for menor do que 10 = Ferro 
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
*/
  let nivel;
  if (saldoVitorias <= 10) { // Deixado condição <= 10 para incluir o 10 se não teriamos um bug para o nível 10 que não teria classificação
    nivel = 'Ferro';
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = 'Bronze';
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = 'Prata';
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = 'Ouro';
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = 'Diamante';
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = 'Lendário';
  } else if (saldoVitorias >= 101) {
    nivel = 'Imortal';
  }

  return nivel;
}

function main() {
  const saldoVitorias = calculaSaldoVitorias(125, 40);
  const nivel = classificaNivelHeroi(saldoVitorias);

  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

main();