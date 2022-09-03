console.log(`\nTrabalhando com Listas`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 19;
const acompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || acompanhada == true;

let contador = 0;
let destinoDisponivel = false;
while(contador<3){
    if (listaDeDestinos[contador] == destino){
        destinoDisponivel = true;
        break;
    };
    contador += 1;
};

console.log("Destino disponível: ", destinoDisponivel);

if (podeComprar && destinoDisponivel == true){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe, tivemos um problema!");
};